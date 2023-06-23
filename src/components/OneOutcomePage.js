import { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from '../api/api';

function OneOutcomePage() {
  const [outCome, setOutcome] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [description, setDescription] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [value, setValue] = useState(0);

  const handleMonth = (e) => setMonth(e.target.value);
  const handleYear = (e) => setYear(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleValue = (e) => setValue(e.target.value);

  const { outcomeId } = useParams();
  const navigate = useNavigate();

  const fetchOutcome = useCallback(async () => {
    const oneOutcome = await api.getOneOutcome(outcomeId);
    setOutcome(oneOutcome);
    setDescription(oneOutcome.description);
    setValue(oneOutcome.value);
    setMonth(oneOutcome.month);
    setYear(oneOutcome.year);
  }, [outcomeId])

  const deleteOutcome = async () => {
    await api.removeOutcome(outcomeId);
    navigate('/monthly-statement');
  }

  const toggleIsFormOpen = () => {
    setIsFormOpen(!isFormOpen);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.editOutcome(outcomeId, {description, value, month, year});
    setIsFormOpen(false);
    fetchOutcome();
  }

  useEffect(() => {
    fetchOutcome();
  }, [fetchOutcome])

  return (
    <div className="BookDetails">
      {outCome && (
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
              <h1> Detalhes do gasto "{outCome.description}". </h1>
              <span>Valor: {outCome.value}</span>
              <p>Mês: {outCome.month}</p>
              <p>Ano: {outCome.year}</p>
            </>
          )}
        </>
      )}

            

      <button onClick={toggleIsFormOpen}>{isFormOpen ? 'Cancelar' : 'Editar'}</button>
      <Link to='/monthly-statement'>
        <button>Voltar</button>
      </Link>
      <button onClick={deleteOutcome}>Remover</button>
    </div>
  )
}

export default OneOutcomePage;