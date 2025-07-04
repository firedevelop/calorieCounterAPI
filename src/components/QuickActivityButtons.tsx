import { useActivity } from '../hooks/useActivity'

const quickActivities = [
    { name: 'Correr', calories: 50 },
    { name: 'Nadar', calories: 100 },
    { name: 'Boxeo', calories: 25 },
    { name: 'Pesas', calories: 10 },
]

export default function QuickActivityButtons() {
    const { dispatch } = useActivity()

    const handleAdd = (activity: { name: string, calories: number }) => {
        dispatch({
            type: 'FETCH_SUCCESS',
            payload: { name: `Ejercicio: ${activity.name}`, calories: -activity.calories }
        })
    }

    return (
        <div className="flex flex-wrap gap-2 my-4">
            {quickActivities.map((act) => (
                <button
                    key={act.name}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                    onClick={() => handleAdd(act)}
                >
                    {act.name} (-{act.calories} kcal)
                </button>
            ))}
        </div>
    )
}