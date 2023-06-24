import { Link } from "react-router-dom";
import React from "react";
import "./NavBar.css";
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
function Navbar() {
const { isLoggedIn, logoutUser } = useContext(AuthContext);
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
        {isLoggedIn ? (
          <div className="direita">
           
          <li>
            <Link to= "/welcome-page"> Página inicial</Link>
          </li>
           
            <li>
              <button onClick={logoutUser}> Logout </button>
            </li>
           
          </div>
        ) : (
          <div className="direita">
            <li>
              <Link to="/signup">Cadastar</Link>
            </li>
            <li>
              <Link to="/login">Entrar</Link>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
