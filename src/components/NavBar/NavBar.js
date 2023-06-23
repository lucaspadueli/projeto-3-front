import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import "./NavBar.css";

function Navbar() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="nav-bar">
      <ul className="nav-list">
        <div className="esquerda">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Sobre">Sobre</Link>
          </li>
        </div>
        <div className="direita">
          {!isLoggedIn && (
            <>
              <li>
                <Link to="/signup">Cadastrar</Link>
              </li>
              <li>
                <Link to="/login">Entrar</Link>
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  );
}
 

export default Navbar;
