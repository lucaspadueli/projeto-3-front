import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './addOutcome.css';
const years = ["2022", "2023"];
const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

function AddOutcomePage () {

const [description,setDescription] = useState('');
const [value,setValue] = useState(0);
const [month,setMonth] = useState('');
const [year,setYear] = useState('');
const [expenseType,setExpenseType] = useState('');
const navigate = useNavigate();
  const handleDescription = (e) => setDescription(e.target.value);
  const handleValue = (e) => setValue(e.target.value);
  const handleMonth = (e) => setMonth(e.target.value);
  const handleYear = (e) => setYear(e.target.value);
  const handleType = (e) => setExpenseType(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!description || !value || !expenseType || !year || !month){
      return
    }
    const outcome = {
      description, value,expenseType, month, year
    }
    await api.addOutcome(outcome);
    resetForm();
    navigate('/monthly-statement')
  }

  const resetForm = () => {
    setDescription('');
    setValue(0);
    setMonth('');
    setYear('');
  }

  const expenseTypeOptions = [
    "Housing",
    "Utilities",
    "Grocery",
    "Savings",
    "Other",
    "Education",
    "Debt Payments",
    "Miscellaneous Expenses",
    "Transportation",
  ];


return(

<div className="add-outcome">
<Link to = "/welcome-page"> <button>Voltar </button></Link>
<h3 id = "h3-add-outcome"> Adicione suas despesas abaixo:</h3>

<p className="warning"> Atenção: Todos os campos são obrigatórios. </p>

<form className="add-outcome-form" onSubmit={handleSubmit}>
          
          <label htmlFor="description">Description:</label>
          <input id="description" type="text" value={description} onChange={handleDescription} />
          
          <label htmlFor="value">Value:</label>
          <input id="value" type="number" value={value} onChange={handleValue} />

          <label htmlFor="type">Expense Type:</label>
        <select id="type" value={expenseType} onChange={handleType}>
          <option value="">Selecione uma opção</option>
          {expenseTypeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
          
        <label htmlFor="month">Mês:</label>
          <select id="month-outcome" type='text' value={month} onChange={handleMonth}>

          <option>Selecione uma opção </option>
          {months.map((month)=> (
            <option key = {month} value = {month}>
              {month}
            </option>
          ))}


          </select>
          
          <label htmlFor="year">Ano:</label>
          <select id="year-outcome" type="text" value={year} onChange={handleYear}>
            <option value=""> Selecione uma opção </option>
            {years.map((year)=> (
              <option key = {year} value = {year}>
                {year}
              </option>
            ))}
          </select>

          <button className="add-outcome-button" type="submit">Enviar</button>
      </form>


</div>


)


}

export default AddOutcomePage;