import { MouseEventHandler } from "react";
import "../styles/Button.css";
const Button = (props: { color: string; text: string, onClick: MouseEventHandler }) => {
    return (
        <button onClick={props.onClick} className='btn' style={{ backgroundColor: props.color }}>
            {props.text}
        </button>
    )
}

Button.defaultProps = {
    color: "rgb(136, 136, 136)",
    text: "Add a Task"
}

export default Button;