import { useMemo } from 'react'
import Form from "./components/Form"
import ActivityList from './components/ActivityList'
import { useActivity } from './hooks/useActivity'
import QuickActivityButtons from './components/QuickActivityButtons'

function App() {
  const { state, dispatch, totalCalories } = useActivity()
  const canRestartApp = useMemo(() => state.meals.length > 0, [state.meals])

  return (
    <>
      <header className="bg-orange-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center px-5">
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo.svg" alt="Logo" className="h-30 w-50" />
            <h1 className="text-3xl">Calorie counter</h1>
          </div>


          <button
            className='bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm disabled:opacity-50'
            disabled={!canRestartApp}
            onClick={() => dispatch({ type: 'RESTART_APP' })}
          >
            Reiniciar App
          </button>
        </div>
      </header>

      <section className="bg-lime-500 py-20 px-5"
        style={{
          backgroundImage: `linear-gradient(rgba(236,122,28, 0.9), rgb(0, 0, 0)), url('/fitness-2.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#222", // Cambia este color según lo que desees
          minHeight: "10vh"
        }}>
        <div className="max-w-xl mx-auto">
          <Form />
          <QuickActivityButtons /> {/* Añade aquí */}
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