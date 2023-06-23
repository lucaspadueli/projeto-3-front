import { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from '../api/api';

function OneIncomePage() {
  const [income, setIncome] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [description, setDescription] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [value, setValue] = useState(0);

  const handleMonth = (e) => setMonth(e.target.value);
  const handleYear = (e) => setYear(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleValue = (e) => setValue(e.target.value);

  const { incomeId } = useParams();
  const navigate = useNavigate();

  const fetchIncome = useCallback(async () => {
    const oneIncome = await api.getOneIncome(incomeId);
    setIncome(oneIncome);
    setDescription(oneIncome.description);
    setValue(oneIncome.value);
    setMonth(oneIncome.month);
    setYear(oneIncome.year);
  }, [incomeId])

  const deleteIncome = async () => {
    await api.removeIncome(incomeId);
    navigate('/monthly-statement');
  }

  const toggleIsFormOpen = () => {
    setIsFormOpen(!isFormOpen);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.editIncome(incomeId, {description, value, month, year});
    setIsFormOpen(false);
    fetchIncome();
  }

  useEffect(() => {
    fetchIncome();
  }, [fetchIncome])

  return (
    <div className="BookDetails">
      {income && (
        <>
          {isFormOpen ? (
            <div className="AddBook">
              <form onSubmit={handleSubmit}>
                <label htmlFor="description">Descrição:</label>
                <input id="description" type="text" value={description} onChange={handleDescription} />
                
                <label htmlFor="value">Valor:</label>
                <input id="value" type="number" value={value} onChange={handleValue} />
                
                <label htmlFor="month">Mês:</label>
                <textarea id="month" type='text' value={month} onChange={handleMonth} />
                
                <label htmlFor="year">Ano:</label>
                <input id="year" type="text" value={year} onChange={handleYear} />

                <button type="submit">Submit</button>
              </form>
            </div>
          ) : (
            <>
              <h1> Detalhes da entrada: "{income.description}". </h1>
              <span>Valor: {income.value}</span>
              <p>Mês: {income.month}</p>
              <p>Ano: {income.year}</p>
            </>
          )}
        </>
      )}

            

      <button onClick={toggleIsFormOpen}>{isFormOpen ? 'Cancelar' : 'Editar'}</button>
      <Link to='/monthly-statement'>
        <button>Voltar</button>
      </Link>
      <button onClick={deleteIncome}>Remover</button>
    </div>
  )
}

export default OneIncomePage;