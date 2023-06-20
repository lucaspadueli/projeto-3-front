import { Routes, Route } from 'react-router-dom';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<div>FINANCEIRO PAGINA INICIAL TESTE</div>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};
export default App;
