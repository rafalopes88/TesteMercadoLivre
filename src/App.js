
import './App.scss';
import CaixaPesquisa from './caixa-de-pesquisa/caixaPesquisa.js';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  function handleSearch(search){
    
    navigate('/items?search='+search);
  
  }

  return (
    <CaixaPesquisa
      value=''
      onSubmit={(search) => handleSearch(search)}
    />);

}

export default App;
