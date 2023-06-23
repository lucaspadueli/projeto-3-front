import { useState,useEffect } from "react";
import api from "../api/api";


function StatementPage () {
const [incomes,setIncomes] = useState(null);

useEffect(()=> {
    const fetchData = async ()=> {
        const fetchIncomes = await api.getIncomes();
        setIncomes(fetchIncomes);
    } 
    fetchData();
}
,[])

return (
    <div className="incomes">
      <h2>Incomes</h2>
      {incomes && incomes.map((income) => (
        <div key={income._id}>
          <p>Description: {income.description}</p>
          <p>Value: {income.value}</p>
          
        </div>
      ))}
    </div>
  );

    
}

export default StatementPage;