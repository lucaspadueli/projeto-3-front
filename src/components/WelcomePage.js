import { useEffect, useState } from "react";
import api from "../api/api";
function WelcomePage(){
const [user,setUser] = useState(null);

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

    <div> 
    
      <h1> Olá {user.name} - {greeting}  </h1>    
    <ul>

    <li>1</li>
    <li>2</li>
    <li>3</li>

    </ul>
    </div>
)

}

export default WelcomePage;