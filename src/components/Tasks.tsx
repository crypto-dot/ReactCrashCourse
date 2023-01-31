import { Task } from "../App";
import TaskComponent from "./TaskComponent";
import "../styles/Tasks.css";

const Tasks = (props: { tasks: Task[], onDelete: Function, setSaved: Function }) => {

    return (
        <div className="block__tasks">
            {props.tasks.map(task => {
                return (
                    <TaskComponent key={task.id} saved={task.saved} title={task.title} desc={task.desc} id={task.id} setSaved={props.setSaved} onDelete={props.onDelete} />
                )
            })}
        </div>
    )
}

export default Tasks;