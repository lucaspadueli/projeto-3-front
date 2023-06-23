import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
const years = ["2022", "2023"];
const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];



function AddIncomePage () {

const [description,setDescription] = useState('');
const [value,setValue] = useState(0);
const [month,setMonth] = useState('');
const [year,setYear] = useState('');
const navigate = useNavigate();
  const handleDescription = (e) => setDescription(e.target.value);
  const handleValue = (e) => setValue(e.target.value);
  const handleMonth = (e) => setMonth(e.target.value);
  const handleYear = (e) => setYear(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const income = {
      description, value, month, year
    }
    await api.addIncome(income);
    resetForm();
    navigate("/monthly-statement");
  }

  const resetForm = () => {
    setDescription('');
    setValue(0);
    setMonth('');
    setYear('');
  }




return(

<div className="add-income">

<h1> Add your incomes below</h1>

<p> For the months input use the number related to the month, for example: "01" for January "12" for December</p>

<form onSubmit={handleSubmit}>
          
          <label htmlFor="description">Description:</label>
          <input id="description" type="text" value={description} onChange={handleDescription} />
          
          <label htmlFor="value">Value:</label>
          <input id="value" type="number" value={value} onChange={handleValue} />
          
          <label htmlFor="month">Month:</label>
          <select id="month" type='text' value={month} onChange={handleMonth}>

          <option>Selecione uma opção </option>
          {months.map((month)=> (
            <option key = {month} value = {month}>
              {month}
            </option>
          ))}


          </select>
          
          <label htmlFor="year">Year:</label>
          <select id="year" type="text" value={year} onChange={handleYear}>
            <option value=""> Select an option </option>
            {years.map((year)=> (
              <option key = {year} value = {year}>
                {year}
              </option>
            ))}
          </select>

          <button type="submit">Submit</button>
      </form>


</div>


)


}

export default AddIncomePage;
