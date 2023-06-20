import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api';
import '../App.css';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubimit = async (e) => {
    e.preventDefault();
    try {
      await api.signup({ username, email, password });
      setSuccessMessage('Usuário cadastrado com sucesso');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage('Erro desconhecido');
      }
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [successMessage]);

  return (
    <div className='SignupPage'>
      <h1>FAÇA SEU CADASTRO</h1>
      {successMessage && <p className='success-message'>{successMessage}</p>}
      <form onSubmit={handleSubimit}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' value={username} onChange={handleUsername} />

        <label htmlFor='email'>Email</label>
        <input id='email' type='email' value={email} onChange={handleEmail} />

        <label htmlFor='password'>Password</label>
        <input id='password' type='text' value={password} onChange={handlePassword} />

        <button type='submit'>Signup</button>
      </form>

      {errorMessage && <p className='error-message'>{errorMessage}</p>}

      <p>Already have an account?</p>
      <Link to='/login'>Login</Link>
    </div>
  );
}

export default SignupPage;
