import { Dispatch, ReactNode, createContext, useReducer, useMemo } from "react";
import { Meal } from "../types";

// --- Definición del Estado y Acciones ---
type AppState = {
    meals: Meal[];
    loading: boolean;
    error: string | null;
};

type AppAction =
    | { type: 'FETCH_START' }
    | { type: 'FETCH_SUCCESS'; payload: { name: string; calories: number } }
    | { type: 'FETCH_ERROR'; payload: { error: string } }
    | { type: 'DELETE_MEAL'; payload: { id: Meal['id'] } }
    | { type: 'RESTART_APP' };

// --- Reducer ---
const mealsReducer = (state: AppState, action: AppAction): AppState => {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
            const newMeal: Meal = { id: Date.now(), name: action.payload.name, calories: Math.round(action.payload.calories) };
            return { ...state, loading: false, meals: [...state.meals, newMeal] };
        case 'FETCH_ERROR':
            return { ...state, loading: false, error: action.payload.error };
        case 'DELETE_MEAL':
            return { ...state, meals: state.meals.filter((meal) => meal.id !== action.payload.id) };
        case 'RESTART_APP':
            return { meals: [], loading: false, error: null };
        default:
            return state;
    }
};

const initialState: AppState = { meals: [], loading: false, error: null };

type ActivityContextProps = {
    state: AppState;
    dispatch: Dispatch<AppAction>;
    searchAndAddMeal: (searchTerm: string) => Promise<void>;
    totalCalories: number;
};

export const ActivityContext = createContext<ActivityContextProps>(null!);

export const ActivityProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(mealsReducer, initialState);

    const totalCalories = useMemo(() => state.meals.reduce((total, meal) => total + meal.calories, 0), [state.meals]);

    const searchAndAddMeal = async (searchTerm: string) => {
        dispatch({ type: 'FETCH_START' });
        const APP_ID = import.meta.env.VITE_NUTRITIONIX_APP_ID;
        const APP_KEY = import.meta.env.VITE_NUTRITIONIX_APP_KEY;

        if (!APP_ID || !APP_KEY) {
            dispatch({ type: 'FETCH_ERROR', payload: { error: 'Error: Las claves de API no se cargaron. Revisa tu archivo .env y reinicia el servidor.' } });
            return;
        }

        try {
            const response = await fetch(`https://trackapi.nutritionix.com/v2/natural/nutrients`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'x-app-id': APP_ID, 'x-app-key': APP_KEY },
                body: JSON.stringify({ query: searchTerm }),
            });
            if (!response.ok) throw new Error(response.status === 401 ? 'Error de autenticación. Revisa tus claves de Nutritionix.' : `Error de la API: ${response.statusText}`);
            const data = await response.json();
            if (!data.foods || data.foods.length === 0) throw new Error('No se encontraron resultados para esta comida.');

            dispatch({ type: 'FETCH_SUCCESS', payload: { name: data.foods[0].food_name, calories: data.foods[0].nf_calories } });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Ocurrió un error desconocido';
            dispatch({ type: 'FETCH_ERROR', payload: { error: errorMessage } });
        }
    };

    return (
        <ActivityContext.Provider value={{
            state,
            dispatch,
            searchAndAddMeal,
            totalCalories
        }}>
            {children}
        </ActivityContext.Provider>
    );
};