import { XCircleIcon } from '@heroicons/react/24/outline'
import { useActivity } from "../hooks/useActivity"

export default function ActivityList() {
    const { state, dispatch } = useActivity()
    const isEmpty = state.meals.length === 0;
    
    return (
        <>
            <h2 className="text-4xl font-bold text-slate-600 text-center">
                Comidas de Hoy
            </h2>
        
            {state.error && <p className="text-center my-4 p-2 bg-red-500 text-white font-bold">{state.error}</p>}

            {isEmpty ? <p className="text-center my-5">No hay comidas aún...</p> : 
                state.meals.map( meal => (
                    <div key={meal.id} className="px-5 py-10 bg-white mt-5 flex justify-between items-center shadow">
                        <div className="space-y-2">
                            <p className="text-lg font-bold capitalize">{meal.name}</p>
                            <p className="font-black text-2xl text-lime-500">
                                {meal.calories} Calorías
                            </p>
                        </div>
                        <div className="flex items-center">
                            <button
                                onClick={() => dispatch({type: "DELETE_MEAL", payload: {id: meal.id}})}
                            >
                                <XCircleIcon
                                    className="h-8 w-8 text-red-500"
                                />
                            </button>
                        </div>
                    </div>
                ))}
        </>
    )
}
