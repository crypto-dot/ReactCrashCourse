import { Task } from "../App";
import TaskComponent from "./TaskComponent";

const Tasks = (props: { tasks: Task[] }) => {
    console.log(props.tasks);
    return (
        <>
            {props.tasks.map(task => {
                return (
                    <TaskComponent key={task.id} title={task.title} desc={task.desc} />
                )
            })}
        </>
    )
}

export default Tasks