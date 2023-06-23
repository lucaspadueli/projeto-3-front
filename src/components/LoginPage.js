import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import api from '../api/api';
import '../App.css';
import './login.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const {authToken} = await api.login({ username, password });
      storeToken(authToken);
      authenticateUser();
      navigate('/welcome-page');
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }
  };

  return (
    <div className="LoginPage">
    <div>
    <Link to = "/"> <button className='back-btn'>Voltar</button> </Link>
    </div>
    
      <h1>FAÇA SEU LOGIN</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={username} onChange={handleUsername} />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" value={password} onChange={handlePassword} />

        <button type="submit">Login</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Don't have an account?</p>
      <Link to="/signup">Signup</Link>
    </div>
  );
}

export default LoginPage;
