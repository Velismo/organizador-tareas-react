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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
