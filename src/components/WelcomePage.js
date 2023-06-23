import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";
import './welcome-page.css';
import welcomeImage from './images/welcome--page-principal.jpeg';
import Navbar from "./NavBar/NavBar";
function WelcomePage(){
const [user,setUser] = useState([]);

const fetchUser = async()=> {
    const fetchData = await api.getUserInfo();
    setUser(fetchData);

    console.log(fetchData);
}

useEffect(()=> {
    fetchUser();
},[])

let greeting;

if(user.gender === "Masculino"){
     greeting = "Seja bem-vindo"
}
else if(user.gender === "Feminino"){
     greeting = "Seja bem-vinda"
}
else{
         greeting = "Que bom ver você"
}



return (

    
    <div className="greeting"> 
    <Navbar />
      <h1 id = "greeting-h1"> Olá {user.name}!  {greeting}  </h1>    
      <h2 id = "greeting-h2"> Escolha abaixo qual ação deseja realizar:</h2>

    <div className="welcome-page"> 
    
      
    <div className="options ">

    <div className="add-entrada"> 
    <h5> Adicionar entrada: </h5>
    <Link to = "/add-income"> 
    <button className="welcome-buttons"> Adicionar entrada</button>
    </Link>
    <p>Clique aqui para registrar entradas de dinheiro.</p>
    </div>

    <div className="add-saída"> 
    <h5> Adicionar despesa: </h5>
    <Link to = "/add-outcome"> <button className="welcome-buttons">Adicionar Despesa</button> </Link>
    <p> Clique aqui para manter controle sobre os seus gastos.</p>
    </div>

    <div className="statement"> 
    <h5> Verificar extrato: </h5>
    <Link to = "/monthly-statement"> <button className="welcome-buttons"> Verificar extrato</button> </Link>
    <p>Clique aqui para verificar o seu balanço.</p>
    </div>
    

    </div>
    
    <div className="welcome-image-main"> 
    <img id = "main-image" src = {welcomeImage} alt = "imagem-principal"/>
    <h5 className="quote"> "A disciplina é a ponte entre metas e realizações financeiras." - Jim Rohn </h5>
    </div>
    

    </div>
    </div>
)

}

export default WelcomePage;