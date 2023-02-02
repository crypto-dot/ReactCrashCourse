import { useEffect, useState } from 'react'
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
  const setTitle = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    e.stopPropagation();
    const target = e.target as HTMLInputElement;
    const inputTitle = target.value === "" ? "Default Title" : target.value;
    setTasks(tasks.map(task => { return task.id === id ? { ...task, title: inputTitle } : task }));
  }
  const setDesc = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    e.stopPropagation();
    const target = e.target as HTMLInputElement;
    setTasks(tasks.map(task => { return task.id === id ? { ...task, desc: target.value } : task }));
  }
  const addNewTask = (title: string, desc: string) => {
    const id: number = tasks.length;
    setTasks([...tasks, { id: id, title: title, desc: desc }])
  }
  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} setSaved={setSaved} onDelete={onDelete} setTitle={setTitle} setDesc={setDesc} />
    </div>
  )
}

export default App
