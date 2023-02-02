import { CloseOutlined, Edit } from "@mui/icons-material";
import "../styles/TaskComponent.css";
import React, { useState } from "react";
const TaskComponent = (props: { title: string, desc: string, id: number, saved: boolean, onDelete: Function, setSaved: Function, setTitle: Function, setDesc: Function }) => {
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
                <div className={props.saved ? "block__task--saved" :
                    "block__task"} onClick={handleTaskClick}>
                    <section className="section__TaskInfo">
                        <input className="input__taskTitle" type="text" defaultValue={props.title} onChange={(e) => props.setTitle(e, props.id)} onClick={(e) => e.stopPropagation()} />
                        <textarea className="input__taskTitle" defaultValue={props.desc ? props.desc : "Description"} onChange={(e) => props.setDesc(e, props.id)} onClick={(e) => e.stopPropagation()} />
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