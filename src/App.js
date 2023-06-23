import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import SobrePage from './components/SobrePage/SobrePage';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';

 import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';
import AddIncomePage from './components/AddIncomePage';
import AddOutcomePage from './components/AddOutcomePage';
import StatementPage from './components/StatementPage';
import StatementMonth from './components/StatementMonth';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/Home' element={<HomePage />} />
        <Route path='/Sobre' element={<SobrePage />} />

       
       
        <Route path='/signup' element={<IsAnon><SignupPage /></IsAnon>} />
        <Route path='/login' element={<IsAnon><LoginPage /></IsAnon>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/add-income" element={<AddIncomePage/>} />
        <Route path= "add-outcome" element={<AddOutcomePage/>} />
        <Route path= "all-incomes" element={<StatementPage/>} />
        <Route path="monthly-statement" element = {<StatementMonth/>} />

        </Routes>
<Footer />
      

    </div>
  )
};
export default App;
