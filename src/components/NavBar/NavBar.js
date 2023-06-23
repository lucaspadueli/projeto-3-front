import { Link } from "react-router-dom";
import React from "react";
import "./NavBar.css";

function Navbar() {
    return (
        <div className="nav-bar">

            <ul className="nav-list">

                <div className="esquerda">
                    <li> <Link to="/Home">Home</Link></li>
                    <li> <Link to="/Sobre">Sobre</Link></li>
                </div>
                <div className="direita">
                    <li> <Link to="/Cadastrar">Cadastar</Link></li>
                    <li> <Link to="/Entrar">Entrar</Link></li>
                </div>

            </ul>


        </div>

    )
}

export default Navbar;