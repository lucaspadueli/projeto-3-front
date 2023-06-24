import React from "react";
import "./HomePage.css"
import homePageImg1 from "../images/financeiro.jpg";
import Navbar from "../NavBar";
function HomePage ()  {

    return (
        
        <div className="home-page">
    <Navbar/>
            <h1 id = "h1-home">Finanças em Equilíbrio</h1>
            <div className="images">

            <img src={homePageImg1} alt="financeiro.jpg" />

            <p className="home-p">
            Gerencie com precisão todas as despesas dos seus cartões de crédito.
            </p>

            <p className="home-p">
            Gerencie seus objetivos financeiros de curto, médio e longo prazo. 
            </p>

            <p className="home-p">
            Acompanhe seu crescimento rumo a sua independência financeira.
            </p>
        </div>
        </div>
    )
}

export default HomePage;