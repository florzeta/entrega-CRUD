import React from "react";
import "../styles/components/layout/Header.css"
const Header = (props) => {
    return (
        <div className="holder">
            <img src="\images\BlogApp.logo.png" width="150" alt='logo Blog App' />
            <h1>Bienvenidos!</h1>
        </div>
    );
}

export default Header;
