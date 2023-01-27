import { CloseOutlined, Edit } from "@mui/icons-material";
import "../styles/TaskComponent.css";
import { useState } from "react";
const TaskComponent = (props: { title: string, desc: string, id: number, onDelete: Function }) => {
    const [saved, setSaved] = useState(false);
    return (
        <>
            <section className={saved ? "section__task--saved" : "section__task"} onClick={() => {
                setSaved(!saved);
            }}>
                <div>
                    <h1 className="h1__task">{props.title}</h1>
                    <p className="p__task">{props.desc}</p>
                </div>
                <div className="block__buttons">
                    <button className="btn__svg">
                        <Edit className="svg__edit" />
                    </button>
                    <button onClick={() => props.onDelete(props.id)} className="btn__svg">
                        <CloseOutlined className="svg__closeOutline" />
                    </button>
                </div>
            </section>
        </>
    )
}

export default TaskComponent