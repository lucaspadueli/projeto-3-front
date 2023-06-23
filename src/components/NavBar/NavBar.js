import { Link } from "react-router-dom";
import React from "react";
import "./NavBar.css";

function Navbar() {
    return (
        <div className="nav-bar">

            <ul className="nav-list">

                <div className="esquerda">
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/Sobre">Sobre</Link></li>
                </div>
                <div className="direita">
                    <li> <Link to="/signup">Cadastar</Link></li>
                    <li> <Link to="/login">Entrar</Link></li>
                </div>

            </ul>


        </div>

    )
}

export default Navbar;