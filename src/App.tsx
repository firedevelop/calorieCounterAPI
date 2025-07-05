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
      <header className="bg-orange-600 py-4 shadow-md relative overflow-visible">
        <div className="max-w-4xl mx-auto flex justify-between items-center px-5">
          <div className="flex items-center gap-4 relative">
            <div className="relative">
              <img
                src="/logo.svg"
                alt="Logo"
                className="h-24 w-24 rounded-full shadow-lg border-2 border-white"
                style={{
                  position: "absolute",
                  left: 0,
                  top: "-16px",
                  zIndex: 10,
                  // Hace que sobresalga por debajo del header
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)"
                }}
              />
              {/* Espacio para que el contenido no se superponga */}
              <div style={{ width: "6rem", minWidth: "6rem" }} />
            </div>
            <h1
              className="text-4xl font-bold tracking-wide text-white drop-shadow"
              style={{
                fontFamily: "'Share Tech', 'Segoe UI', 'Arial', sans-serif",
                letterSpacing: "0.1em",
                textShadow: "2px 2px 8px rgba(0,0,0,0.25)"
              }}
            >
              Calorie Counter
            </h1>
          </div>
          <button
            className='flex items-center gap-2 bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm disabled:opacity-50 transition'
            disabled={!canRestartApp}
            onClick={() => dispatch({ type: 'RESTART_APP' })}
            title="Reiniciar App"
          >
            {/* Reset Icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582M19.418 19A9 9 0 106.582 6.582L4 9m0 0h5" />
            </svg>
            Reset
          </button>
        </div>
      </header>

      <section className="bg-lime-500 py-20 px-5"
        style={{
          backgroundImage: `linear-gradient(rgba(236,122,28, 0.9), rgb(0, 0, 0,0.9)), url('/fitness-2.jpg')`,
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

      <footer className="bg-gray-800 text-gray-200 text-center py-6 mt-10 text-sm">
        <div>
          Made with <span style={{color: "#e25555"}}>♥</span> by <a href="https://github.com/fireDevelop" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">fireDevelop</a>
        </div>
        <div className="mt-2">
          Photo by <a href="https://unsplash.com/@sxoxm?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sven Mieke</a> on <a href="https://unsplash.com/photos/woman-lifting-barbel-optBC2FxCfc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </div>
        <div>
          Photo by <a href="https://unsplash.com/@annapelzer?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Anna Pelzer</a> on <a href="https://unsplash.com/photos/bowl-of-vegetable-salads-IGfIGP5ONV0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </div>
        <div>
          Photo by <a href="https://unsplash.com/@echaparro?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Edgar Chaparro</a> on <a href="https://unsplash.com/photos/woman-doing-exercise-urEdfBdk1FE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      
        </div>
        <div>
          Powered by <a href="https://www.nutritionix.com/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Nutritionix</a>
        </div>
        <div>
          <a href="https://www.freepik.com/free-vector/fitness-center-logo-design-template_35897801.htm#fromView=keyword&page=1&position=19&uuid=bd785584-eadb-4377-aaf0-1e9f224df9d0&query=Fitness+Logo" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Image by freepik</a>
        </div>
      </footer>
    </>
  )
}

export default App