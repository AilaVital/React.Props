import React from 'react';

function JogadorCard({ imagem, nome, funcao, habilidade }) {
  return (
    <div className="player-card">
      {/* O src e os textos agora são dinâmicos */}
      <img src={imagem} alt={nome} />
      <h2>{nome}</h2>
      <p>Função: {funcao}</p>
      <p>Habilidade: {habilidade}</p>
    </div>
  );
}

export default JogadorCard;