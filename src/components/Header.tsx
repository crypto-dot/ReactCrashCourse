import "../styles/Header.css"
import Button from "./Button"

const Header = (props: { title: string }) => {
    return (
        <header className="header__main">
            <h1 className="h1__headerMain">
                {props.title}
            </h1>
            <Button />
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

export default Header