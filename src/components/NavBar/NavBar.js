import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import "./NavBar.css";

function Navbar() {
  const { isLoggedIn, handleLogout } = useContext(AuthContext);

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
          {isLoggedIn ? (
            <>
              <li className="hidden">
                <Link to="/signup">Cadastrar</Link>
              </li>
              <li className="hidden">
                <Link to="/login">Entrar</Link>
              </li>
              <li>
                <Link to="/perfil">Perfil</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Sair</button>
              </li>
            </>
          ) : (
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
