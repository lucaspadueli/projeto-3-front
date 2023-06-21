import React, { useState } from 'react';

import api from "../api/api";

function AddIncomePage () {

const [description,setDescription] = useState('');
const [value,setValue] = useState(0);
const [month,setMonth] = useState('');
const [year,setYear] = useState('');

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
          <textarea id="month" type='text' value={month} onChange={handleMonth} />
          
          <label htmlFor="year">Year:</label>
          <input id="year" type="text" value={year} onChange={handleYear} />

          <button type="submit">Submit</button>
      </form>


</div>


)


}

export default AddIncomePage;
