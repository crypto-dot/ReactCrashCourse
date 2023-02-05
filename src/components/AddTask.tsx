import React, { MouseEventHandler, useRef, useState, ChangeEvent, FormEvent } from "react"
import "../styles/AddTask.css"
import { Task } from "../App";
import { Preview } from "@mui/icons-material";

const AddTask = (props: { show: boolean, onClick: MouseEventHandler, addNewTask: Function }) => {
    const DEFAULT_TASK: Task = {
        title: "",
        desc: "",
        saved: false
    }


    const [task, setTask] = useState<Task>(DEFAULT_TASK);

    const titleDOM = useRef(null);
    const descDOM = useRef(null);

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (task.title === "") {
            return;
        }
        props.addNewTask(task);
        formComplete();
    }

    const formComplete = (): void => {
        titleDOM.current.value = "";
        descDOM.current.value = "";
        setTask(DEFAULT_TASK);
    }

    const handleInput = (e: ChangeEvent<any>): void => {
        const { name, value } = e.target;
        setTask(prev => { return { ...prev, [name]: value } })
    }
    return (
        <div className={!props.show ? "block__backdrop--invisible" : "block__backdrop--visible"}>
            <dialog className="dialog__task" aria-labelledby="dialog_title" open={props.show}>
                <form id="form" onSubmit={handleFormSubmit} className="form" >
                    <h1 id="dialog_title" className="h1__dialog">
                        Add a new task
                    </h1>
                    <input onChange={handleInput} ref={titleDOM} minLength={1} name="title" className="input__taskTitle" type="text" placeholder="Title" />
                    <textarea onChange={handleInput} ref={descDOM} name="desc" style={{ resize: "none" }} className="input__taskTitle" placeholder="Descripition" />
                    <div className="block__formButtons">
                        <button className="btn btn__dialogCancel" type="button" onClick={props.onClick}>Cancel</button>
                        <button form="form" className="btn btn__dialogSubmit" > Add </button>
                    </div>
                </form>
            </dialog>
        </div>
    )
}

export default AddTask