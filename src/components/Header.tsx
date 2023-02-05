import "../styles/Header.css"
import Button from "./Button"
import React, { useState } from "react";
import AddTask from "./AddTask";
const Header = (props: { title: String, addNewTask: Function }) => {
    const [show, setShow] = useState(false);
    const handleOnClick = (e: React.MouseEvent): void => {
        setShow(!show);
    }
    return (
        <header className="header__main">
            <h1 className="h1__headerMain">
                {props.title}
            </h1>
            <Button onClick={handleOnClick} />
            <AddTask show={show} onClick={handleOnClick} addNewTask={props.addNewTask} />
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

export default Header;