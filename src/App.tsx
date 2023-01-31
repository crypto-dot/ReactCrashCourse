import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Tasks from './components/Tasks';
export interface Task {
  id: number,
  title: string,
  desc: string,
  saved: boolean
}
function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Doctors Appointment",
      desc: "",
      saved: false
    },
    {
      id: 2,
      title: "Sporting Event",
      desc: "Pick up soccer balls",
      saved: false
    },
    {
      id: 3,
      title: "Daniel's School",
      desc: "Daniel Needs Run to school",
      saved: false
    },
    {
      id: 4,
      title: "Carmen",
      desc: "Carmen's doctor's track",
      saved: false
    }
  ]);

  const onDelete = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const setSaved = (id: number) => {
    setTasks(tasks.map(task => {
      return task.id === id ? { ...task, saved: !task.saved } : task
    }));
  }

  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} setSaved={setSaved} onDelete={onDelete} />
    </div>
  )
}

export default App
