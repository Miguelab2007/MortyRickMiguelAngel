import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CharacterCard.css';

const CharacterCard = ({ character }) => {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/character/${character.id}`);
  };

  return (
    <div className="character-card" onClick={handleDetail}>
      <img 
        src={character.imagen} 
        alt={character.nombre} 
        className="character-card-image" 
      />
      <div className="character-card-info">
        <h3 className="character-card-name">{character.nombre}</h3>
        <p className="character-card-text"><strong>Especie:</strong> {character.especie}</p>
        <p className="character-card-text"><strong>Estado:</strong> {character.estado}</p>
        <p className="character-card-text"><strong>Género:</strong> {character.genero}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
