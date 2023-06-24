import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api';
import '../App.css';
import './login.css';


function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender,setGender] = useState('');
  const [name,setName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleGender = (e) => setGender(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.signup({ username,name,gender, email, password });
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
    <Link to = "/"> <button className='back-btn'>Voltar</button> </Link>
    <div> 
    <h1>FAÇA SEU CADASTRO</h1>
      {successMessage && <p className='success-message'>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' value={username} onChange={handleUsername} />
        <label htmlFor='name'>Nome</label>
        <input id='name' type='text' value={name} onChange={handleName} />

        <label htmlFor='gender'> Gênero </label>
        <select id="gender" value={gender} onChange={handleGender} > 
        <option value = "">Selecione uma opção: </option>
        <option value = "Masculino">Masculino </option>
        <option value = "Feminino">Feminino</option>
        <option value = "Não-binário">Não-binário</option>
        <option value = "Outro">Outro</option>
        <option value = "Prefiro não responder">Prefiro não responder</option>
        </select>

        <label htmlFor='email'>Email</label>
        <input id='email' type='email' value={email} onChange={handleEmail} />

        <label htmlFor='password'>Password</label>
        <input id='password' type='password' value={password} onChange={handlePassword} />

        <button type='submit'>Signup</button>
      </form>

      {errorMessage && <p className='error-message'>{errorMessage}</p>}

      <p>Already have an account?</p>
      <Link to='/login'>Login</Link>
    
    
    </div>
    
    </div>
  );
}

export default SignupPage;
