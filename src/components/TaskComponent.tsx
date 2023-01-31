import { CloseOutlined, Edit } from "@mui/icons-material";
import "../styles/TaskComponent.css";
import React, { useState } from "react";
const TaskComponent = (props: { title: string, desc: string, id: number, saved: boolean, onDelete: Function, setSaved: Function }) => {
    const [edit, setEdit] = useState(false);
    const handleTaskClick = (e: React.MouseEvent) => {
        props.setSaved(props.id);
    }
    const handleExitClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        props.onDelete(props.id);
    }
    const handleEditClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setEdit(!edit);
    }
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        const target = e.target as HTMLInputElement;
        props.title = target.value;
    }
    return (
        <>
            {!edit ? <div className={props.saved ? "block__task--saved" : "block__task"} onClick={handleTaskClick}>
                <section>
                    <h1 className="h1__task">{props.title}</h1>
                    <p className="p__task">{props.desc}</p>
                </section>
                <div className="block__buttons">
                    <button className="btn__svg">
                        <Edit className="svg__edit" onClick={handleEditClick} />
                    </button>
                    <button onClick={() => props.onDelete(props.id)} className="btn__svg">
                        <CloseOutlined className="svg__closeOutline" onClick={handleExitClick} />
                    </button>
                </div>
            </div> :
                <div className={saved ? "block__task--saved" :
                    "block__task"} onClick={handleTaskClick}>
                    <section>
                        <input className="input__taskTitle" type="text" value={props.title} onChange={handleOnChange} />
                    </section>
                    <div className="block__buttons">
                        <button className="btn__svg">
                            <Edit className="svg__edit" onClick={handleEditClick} />
                        </button>
                        <button onClick={() => props.onDelete(props.id)} className="btn__svg">
                            <CloseOutlined className="svg__closeOutline" onClick={handleExitClick} />
                        </button>
                    </div>
                </div>
            }
        </>
    )
}

export default TaskComponent;