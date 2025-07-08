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
        <div className="flex justify-center items-center gap-2">
          <span>Made with <span style={{color: "#e25555"}}>♥</span> by <a href="https://firedevelop.com" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">fireDevelop</a></span>
          <a href="https://github.com/firedevelop/calorieCounterAPI" target="_blank" rel="noopener noreferrer" title="GitHub Repository" className="text-white hover:text-orange-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            </svg>
          </a>
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