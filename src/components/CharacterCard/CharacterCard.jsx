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
        src={character.image} 
        alt={character.name} 
        className="character-card-image" 
      />
      <div className="character-card-info">
        <h3 className="character-card-name">{character.name}</h3>
        <p className="character-card-text"><strong>Especie:</strong> {character.species}</p>
        <p className="character-card-text"><strong>Estado:</strong> {character.status}</p>
        <p className="character-card-text"><strong>Género:</strong> {character.gender}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
