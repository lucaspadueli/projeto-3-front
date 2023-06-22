import { Routes, Route } from 'react-router-dom';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<div>FINANCEIRO PAGINA INICIAL TESTE</div>} />
        <Route path='/signup' element={<IsAnon><SignupPage /></IsAnon>} />
        <Route path='/login' element={<IsAnon><LoginPage /></IsAnon>} />
      </Routes>
    </div>
  )
};
export default App;
