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
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-3">
          <label htmlFor="search" className="font-bold text-gray-700">Buscar Comida:</label>
          <input
            id="search"
            type="text"
            className="border border-slate-300 p-2 rounded-lg"
            placeholder="Ej: 1 cup of rice, 1 apple..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
      </div>
      <input
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-50"
        value={state.loading ? 'Buscando...' : 'Añadir Comida'}
        disabled={state.loading || !searchTerm.trim()}
      />
    </form>
  )
}
