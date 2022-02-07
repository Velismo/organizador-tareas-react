import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Cita con el médico',
      day: '5 de febrero 14:30',
      reminder: true
    },
    {
      id: 2,
      text: 'Tutoría en el colegio',
      day: '6 de febrero 13:30',
      reminder: true
    },
    {
      id: 3,
      text: 'Salir de la cuarentena',
      day: '6 de febrero 12:30',
      reminder: true
    }
  ])

  // Eliminar tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Recordatorio
  const toggleReminder = (id) => {
    console.log(id)
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        'Sin tareas que mostrar'
      )}
    </div>
  );
}

export default App;
