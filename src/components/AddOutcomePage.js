import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
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

<div className="add-income">

<h1> Add your incomes below</h1>

<p> For the months input use the number related to the month, for example: "01" for January "12" for December</p>

<form onSubmit={handleSubmit}>
          
          <label htmlFor="description">Description:</label>
          <input id="description" type="text" value={description} onChange={handleDescription} />
          
          <label htmlFor="value">Value:</label>
          <input id="value" type="number" value={value} onChange={handleValue} />

          <label htmlFor="type">Expense Type:</label>
        <select id="type" value={expenseType} onChange={handleType}>
          <option value="">Select an option</option>
          {expenseTypeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
          
          <label htmlFor="month">Month:</label>
          <textarea id="month" type='text' value={month} onChange={handleMonth} />
          
          <label htmlFor="year">Year:</label>
          <input id="year" type="text" value={year} onChange={handleYear} />

          <button type="submit">Submit</button>
      </form>


</div>


)


}

export default AddOutcomePage;