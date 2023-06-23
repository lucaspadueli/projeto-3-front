import { Routes, Route } from 'react-router-dom';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import AddIncomePage from './components/AddIncomePage';
import AddOutcomePage from './components/AddOutcomePage';
import StatementPage from './components/StatementPage';
import StatementMonth from './components/StatementMonth';
import OneOutcomePage from './components/OneOutcomePage';
import OneIncomePage from './components/OneIncomePage';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<div>FINANCEIRO PAGINA INICIAL TESTE</div>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/add-income" element={<AddIncomePage/>} />
        <Route path= "add-outcome" element={<AddOutcomePage/>} />
        <Route path= "all-incomes" element={<StatementPage/>} />
        <Route path="monthly-statement" element = {<StatementMonth/>} />
        <Route path = "/outcome/:outcomeId" element = {<OneOutcomePage/>} />
        <Route path = "/income/:incomeId" element = {<OneIncomePage/>} />
      </Routes>
    </div>
  );
};
export default App;
