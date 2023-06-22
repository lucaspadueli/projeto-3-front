import { useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";
function StatementMonth () {


    const [monthlyStatement,setMonthlyStatement] = useState(null);
    const [selectedMonth,setSelectedMonth] = useState("")
    const [selectedYear,setSelectedYear] = useState("")
    const [totalIncomes, setTotalIncomes] = useState(0);
    const [totalOutcomes, setTotalOutcomes] = useState(0);


    const fetchData = async ()=> {
        const fetchStatement = await api.getMonthlyStatement(selectedMonth,selectedYear);
        setMonthlyStatement(fetchStatement);
        
  const incomesTotal = fetchStatement.incomes.reduce((total, income) => total + income.value, 0);
  setTotalIncomes(incomesTotal);

  
  const outcomesTotal = fetchStatement.outcomes.reduce((total, outcome) => total + outcome.value, 0);
  setTotalOutcomes(outcomesTotal);
    } 
    function handleSubmit(e) {
        e.preventDefault();
        fetchData();
    }
    const handleMonth = (e) => setSelectedMonth(e.target.value);
    const handleYear = (e) => setSelectedYear(e.target.value);
console.log(monthlyStatement)

    

    return (
        
        <div> 
<form className="try" onSubmit={handleSubmit}>
        
        <label htmlFor="selectedMonth">Mes:</label>
         <input id="selectedMonth" type="text" value={selectedMonth} onChange={handleMonth} />
         
         <label htmlFor="selectedYear">Ano:</label>
         <input id="selectedYear" type="text" value={selectedYear} onChange={handleYear} />
        <button type="submit"> buscar </button>
       </form>

       <div className="incomes">

        <ul> 
            <h3> Entradas do mês {selectedMonth}: </h3>
        {monthlyStatement?.incomes.map((income)=>(
            <li key = {income._id}> Descrição:{income.description} Valor: {income.value}    </li> 
        ))}
        
        </ul>

       </div>
       
       <div className="outcomes">

<ul> 
    <h3> Saídas do mês {selectedMonth}: </h3>
{monthlyStatement?.outcomes.map((outcome)=>(
    
    <li key = {outcome._id}> Descrição:{outcome.description} Valor: {outcome.value}  <Link to = {`monthly-statement/outcome/${outcome._id}`}>
<button>
    Mostra a entrada.
</button>

    </Link>    </li>
    
))}

</ul>

</div>

<div className="totals">
  <h3>Total de Entradas: {totalIncomes}</h3>
  <h3>Total de Saídas: {totalOutcomes}</h3>
  <h3>Balanço: {totalIncomes - totalOutcomes}</h3>
</div>

        </div>
        
        

        

    )



}



export default StatementMonth;