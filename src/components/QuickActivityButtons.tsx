import { useState } from "react"
import { useActivity } from "../hooks/useActivity"

const activities = ["Correr", "Nadar", "Boxeo", "Pesas"]
const calorieOptions = [5, 10, 25, 50, 100]

export default function QuickExerciseCalculator() {
    const { dispatch } = useActivity()
    const [selectedActivity, setSelectedActivity] = useState(activities[0])
    const [calories, setCalories] = useState(0)

    const handleAddCalories = (amount: number) => setCalories(c => c + amount)
    const handleReset = () => setCalories(0)
    const handleAddExercise = () => {
        if (calories > 0) {
            dispatch({
                type: "FETCH_SUCCESS",
                payload: { name: selectedActivity, calories: -calories }
            })
            setCalories(0)
        }
    }

    return (
        <div className="my-6 p-4 bg-white rounded shadow">
            <div className="mb-2">
                <span className="font-semibold mr-2">Actividad:</span>
                <select
                    className="border rounded px-2 py-1"
                    value={selectedActivity}
                    onChange={e => setSelectedActivity(e.target.value)}
                >
                    {activities.map(act => (
                        <option key={act} value={act}>{act}</option>
                    ))}
                </select>
            </div>
            <div className="flex gap-2 mb-2">
                {calorieOptions.map(opt => (
                    <button
                        key={opt}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                        onClick={() => handleAddCalories(opt)}
                    >
                        +{opt}
                    </button>
                ))}
                <button
                    className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
            <div className="mb-2">
                <span className="font-semibold">Calorías seleccionadas:</span> {calories}
            </div>
            <button
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded disabled:opacity-50"
                disabled={calories === 0}
                onClick={handleAddExercise}
            >
                Añadir Ejercicio
            </button>
        </div>
    )
}