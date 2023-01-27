import { Task } from "../App";
import TaskComponent from "./TaskComponent";
import "../styles/Tasks.css";

const Tasks = (props: { tasks: Task[], onDelete: Function }) => {

    return (
        <div className="block__tasks">
            {props.tasks.map(task => {
                return (
                    <TaskComponent key={task.id} title={task.title} desc={task.desc} id={task.id} onDelete={props.onDelete} />
                )
            })}
        </div>
    )
}

export default Tasks