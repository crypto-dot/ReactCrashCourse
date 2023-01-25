import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Tasks from './components/Tasks';
export interface Task {
  id: number,
  title: string,
  desc: string,
}
function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Doctors Appointment",
      desc: ""
    },
    {
      id: 2,
      title: "Sporting Event",
      desc: "Pick up soccer balls"
    },
    {
      id: 3,
      title: "Daniel's School",
      desc: "Daniel Needs Run to school"
    },
    {
      id: 4,
      title: "Carmen",
      desc: "Carmen's doctor's track"
    }
  ]);

  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App
