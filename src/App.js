import { Routes, Route } from 'react-router-dom';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import AddIncomePage from './components/AddIncomePage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<div>FINANCEIRO PAGINA INICIAL TESTE</div>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/add-income" element={<AddIncomePage/>} />
      </Routes>
    </div>
  );
};
export default App;
