import "../styles/TaskComponent.css";
const TaskComponent = (props: { title: string, desc: string }) => {
    return (
        <>
            <section className="section__task">
                <h1 className="h1__task">{props.title}</h1>
                <p className="p__task">{props.desc}</p>
            </section>
        </>
    )
}

export default TaskComponent