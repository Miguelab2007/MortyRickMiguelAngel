import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCharacterById } from '../../services/api';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import './CharacterDetail.css';

const CharacterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setLoading(true);
        const data = await getCharacterById(id);
        
        // RF-FORCED: Forzar error si es Criatura Mitológica según requerimiento del usuario
        if (data.species === 'Mythological Creature') {
          setError(true);
          setLoading(false);
          return;
        }

        setCharacter(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacter();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  
  if (error || !character) {
    return (
      <ErrorMessage 
        message="No pudimos encontrar al personaje en este universo." 
        retryAction={() => navigate('/')} 
      />
    );
  }

  const charId = parseInt(id);

  return (
    <div className="detail-container">
      <div className="detail-top-actions">
        <button onClick={() => navigate('/')} className="detail-back-button">
          &larr; Volver
        </button>
      </div>
      
      <div className="detail-passport-card passport-card-responsive">
        <div className="detail-header">
          <h2 className="detail-passport-title">INFORMACIÓN INTERDIMENSIONAL</h2>
        </div>
        
        <div className="detail-content passport-content-responsive">
          <div className="detail-photo-container passport-photo-container">
            <img src={character.image} alt={character.name} className="detail-image passport-image" />
            <div className="detail-id-badge">ID: {character.id.toString().padStart(5, '0')}</div>
          </div>
          
          <div className="detail-details">
            <h3 className="detail-name">{character.name.toUpperCase()}</h3>
            
            <div className="detail-info-grid">
              <p className="detail-info-item"><strong>ESTADO:</strong> {character.status}</p>
              <p className="detail-info-item"><strong>ESPECIE:</strong> {character.species}</p>
              <p className="detail-info-item"><strong>GÉNERO:</strong> {character.gender}</p>
              <p className="detail-info-item"><strong>TIPO:</strong> {character.type || 'N/A'}</p>
              <p className="detail-info-item"><strong>ORIGEN:</strong> {character.origin.name}</p>
              <p className="detail-info-item"><strong>LOCACIÓN:</strong> {character.location.name}</p>
              <p className="detail-info-item"><strong>EPISODIOS:</strong> {character.episode.length}</p>
              <p className="detail-info-item"><strong>CREADO:</strong> {new Date(character.created).toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        <div className="detail-navigation-row">
          <button 
            onClick={() => navigate(`/character/${charId - 1}`)} 
            disabled={charId <= 1}
            className="detail-nav-button"
          >
            &larr; Anterior
          </button>
          <button 
            onClick={() => navigate(`/character/${charId + 1}`)} 
            className="detail-nav-button"
          >
            Siguiente &rarr;
          </button>
        </div>
        
        <div className="detail-footer">
          <div className="detail-barcode">|||| | || ||| | ||| | || | |||| |</div>
          <div className="detail-council-seal">CONSEJO DE RICKS</div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
