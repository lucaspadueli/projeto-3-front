import React from "react";
import "./HomePage.css"
import homePageImg1 from "../images/financeiro.jpg";

function HomePage ()  {

    return (
        <div className="home-page">

            <h1>Projeto Financeiro</h1>

            <img src={homePageImg1} alt="financeiro.jpg" />

            <p className="first">
            Gerencie com precisão todas as despesas dos seus cartões de crédito.
            </p>

            <p className="second">
            Gerencie seus objetivos financeiros de curto, médio e longo prazo. Fique cada vez mais perto de alcançar seus sonhos e objetivos.
            </p>

            <p className="third">
            Acompanhe seu crescimento rumo a sua independência financeira.
            </p>
        
        </div>
    )
}

export default HomePage;