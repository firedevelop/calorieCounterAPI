import { useMemo } from 'react'
import Form from "./components/Form"
import ActivityList from './components/ActivityList'
import { useActivity } from './hooks/useActivity'

function App() {
    const { state, dispatch, totalCalories } = useActivity()
    const canRestartApp = useMemo(() => state.meals.length > 0, [state.meals])
    
    return (
        <>
            <header className="bg-lime-600 py-3">
                <div className="max-w-4xl mx-auto flex justify-between items-center px-5">
                    <h1 className="text-center text-lg font-bold text-white uppercase">
                        Contador de Calorías
                    </h1>

                    <button
                        className='bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm disabled:opacity-50'
                        disabled={!canRestartApp}
                        onClick={() => dispatch({type: 'RESTART_APP'})}
                    >
                        Reiniciar App
                    </button>
                </div>
            </header>

            <section className="bg-lime-500 py-20 px-5">
                <div className="max-w-xl mx-auto">
                    <Form />
                </div>
            </section>

            <section className="p-10 mx-auto max-w-4xl">
                <h2 className="text-4xl font-bold text-slate-600 text-center">
                    Total: {totalCalories} kcal
                </h2>
                <ActivityList />
            </section>
        </>
    )
}

export default App
