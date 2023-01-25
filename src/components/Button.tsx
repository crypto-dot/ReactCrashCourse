import "../styles/Button.css";
const Button = (props: { color: string; text: string }) => {
    return (
        <button className='btn' style={{ backgroundColor: props.color }}>
            {props.text}
        </button>
    )
}

Button.defaultProps = {
    color: "black",
    text: "Add a Task"
}

export default Button