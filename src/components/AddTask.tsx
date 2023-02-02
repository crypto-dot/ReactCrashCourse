import { FormEvent, MouseEventHandler } from "react"
import "../styles/AddTask.css"
const AddTask = (props: { show: boolean, onClick: MouseEventHandler }) => {
    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();

    }
    const handleFormCancel = () => {

    }
    return (
        <div className={!props.show ? "block__backdrop--invisible" : "block__backdrop--visible"}>
            <dialog className="dialog__task" aria-labelledby="dialog_title" open={props.show}>
                <form onSubmit={handleFormSubmit}>
                    <h1 id="dialog_title" className="h1__dialog">
                        Add a new task
                    </h1>
                    <input type="text" placeholder="Title" />
                    <input type="text" placeholder="Descripition" />
                    <div className="block__formButtons">
                        <button type="button" onClick={props.onClick}>Cancel</button>
                        <button> Submit </button>
                    </div>
                </form>
            </dialog>
        </div>
    )
}

export default AddTask