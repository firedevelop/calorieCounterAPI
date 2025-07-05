import { useState, FormEvent } from "react"
import { useActivity } from "../hooks/useActivity"

export default function Form() {
  const { state, searchAndAddMeal } = useActivity()
  const [searchTerm, setSearchTerm] = useState('')
 
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!searchTerm.trim()) return;
    searchAndAddMeal(searchTerm);
    setSearchTerm('');
  }

  return (
    <form 
      className="space-y-5 bg-white shadow p-10 rounded-lg"
      style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/food-1.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#fff",
              padding: "0.5rem 1rem"
            }}
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-3">
          <label htmlFor="search" className="font-bold text-white">Buscar Comida:</label>
          <input
            id="search"
            type="text"
            className="border border-slate-300 p-2 rounded-lg"
            style={{ color: "#000" }}
            placeholder="Ej: 1 cup of rice, 1 apple..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
      </div>
      <input
        type="submit"
        className="bg-orange-700 hover:bg-orange-600 w-full p-2 uppercase text-white cursor-pointer disabled:opacity-90"
        value={state.loading ? 'Buscando...' : 'Añadir Comida'}
        disabled={state.loading || !searchTerm.trim()}
      />
    </form>
  )
}
