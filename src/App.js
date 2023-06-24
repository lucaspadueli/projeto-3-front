import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import SobrePage from './components/SobrePage/SobrePage';
import Footer from './components/Footer/Footer';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';
import AddIncomePage from './components/AddIncomePage';
import AddOutcomePage from './components/AddOutcomePage';
import StatementMonth from './components/StatementMonth';
import WelcomePage from './components/WelcomePage';
import OneOutcomePage from './components/OneOutcomePage';
import OneIncomePage from './components/OneIncomePage';

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Sobre' element={<SobrePage />} />
        <Route path='/signup' element={<IsAnon> <SignupPage /></IsAnon>} />
        <Route path='/login' element={<IsAnon><LoginPage /></IsAnon>} />
        <Route path="/add-income" element={<IsPrivate> <AddIncomePage/></IsPrivate>} />
        <Route path= "add-outcome" element={<IsPrivate><AddOutcomePage/></IsPrivate>} />
        <Route path="monthly-statement" element = {<IsPrivate><StatementMonth/></IsPrivate>} />
        <Route path = "/outcome/:outcomeId" element = {<IsPrivate><OneOutcomePage/></IsPrivate>} />
        <Route path = "/income/:incomeId" element = {<IsPrivate><OneIncomePage/></IsPrivate>} />
        <Route path = "/welcome-page" element ={ <WelcomePage/>}/>
      </Routes>        
<Footer />
      


    </div>
  )
};
export default App;
