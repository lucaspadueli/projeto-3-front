import { useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";
import './statementMonth.css';
const years = ["2022", "2023"];
const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

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
        if(!selectedMonth || !selectedYear){
            return
        }
        fetchData();
    }
    const handleMonth = (e) => setSelectedMonth(e.target.value);
    const handleYear = (e) => setSelectedYear(e.target.value);
console.log(monthlyStatement)

    

    return (
        
        <div className="statement-page"> 
<Link to = "/welcome-page"> <button>Voltar </button></Link>
        <h3 id="h3-stt"> Verifique aqui todo o seu extrato mensal:</h3>


<form className="statement-form" onSubmit={handleSubmit}>
        
<label htmlFor="month">Mês:</label>
          <select id="month" type='text' value={selectedMonth} onChange={handleMonth}>

          <option>Selecione uma opção </option>
          {months.map((month)=> (
            <option key = {month} value = {month}>
              {month}
            </option>
          ))}


          </select>
          
          <label htmlFor="year">Ano:</label>
          <select id="year" type="text" value={selectedYear} onChange={handleYear}>
            <option value=""> Selecione uma opção </option>
            {years.map((year)=> (
              <option key = {year} value = {year}>
                {year}
              </option>
            ))}
          </select>


        <button className="button-statement" type="submit"> Buscar </button>
       </form>
                <div className="extrato"> 
                <div className="incomes">

        <ul> 
            <h3> Entradas do mês {selectedMonth} do ano {selectedYear}: </h3>
        {monthlyStatement?.incomes.map((income)=>(
            <li key = {income._id}> Descrição:{income.description} Valor: ${income.value} usuário: {income.user} 
            
            <Link to = {`/income/${income._id}`}>
            <button className="button-statement">Editar/Remover</button>

            </Link>
            
            </li> 
        ))}
        
        </ul>

       </div>
       
       <div className="outcomes">

<ul> 
    <h3> Saídas do mês {selectedMonth} do ano {selectedYear}: </h3>
{monthlyStatement?.outcomes.map((outcome)=>(
    
    <li className="descrição" key = {outcome._id}> Descrição:{outcome.description} Valor: ${outcome.value}  <Link to = {`/outcome/${outcome._id}`}>
<button className="button-statement">
    Editar/Remover
</button>

    </Link>    </li>
    
))}

</ul>

</div>

<div className="totals">
  <h3>Total de Entradas: ${totalIncomes}</h3>
  <h3>Total de Saídas: $ {totalOutcomes}</h3>
  <h3>Seu balanço mensal é de: $ {totalIncomes - totalOutcomes}</h3>
</div>
                
                
                
                </div>
       

        </div>
        
        

        

    )



}



export default StatementMonth;