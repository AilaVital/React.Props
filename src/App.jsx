import React from 'react';
import './App.css'; 
import JogadorCard from './JogadorCard.jsx'; 
function App() {
  return (
    <div className="time-container">
      
      {/* Jogador 1: Jett */}
      <JogadorCard 
        imagem="/jett.jpg" 
        nome="Jett" 
        funcao="Duelista" 
        habilidade="Precisão Absoluta" 
      />

      <JogadorCard 
        imagem="/sage.jpg" 
        nome="Sage" 
        funcao="Suporte" 
        habilidade="Visão de Mapa" 
      />

      <JogadorCard 
        imagem="/clove.jpg" 
        nome="Phoenix" 
        funcao="controladora" 
        habilidade="Controle de Grupo" 
      />

    </div>
  );
}

export default App;