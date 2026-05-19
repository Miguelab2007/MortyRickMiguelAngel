import React, { useState, useEffect } from 'react';
import { getAllCharacters } from '../../services/api';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import './FilterBySpecies.css';

const FilterBySpecies = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSpecies, setSelectedSpecies] = useState('Human');

  const speciesList = [
    'Human',
    'Alien',
    'Robot',
    'Mythological Creature'
  ];

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getAllCharacters();
        setAllCharacters(data);
        const initialFiltered = data.filter((char) => char.especie === 'Human');
        setFilteredCharacters(initialFiltered);
      } catch (err) {
        console.error('Error fetching characters:', err);
        setError('No se pudieron cargar los personajes. Inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, []);

  const handleFilter = (species) => {
    setSelectedSpecies(species);
    const filtered = allCharacters.filter((char) => char.especie === species);
    setFilteredCharacters(filtered);
  };

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <ErrorMessage 
        message={error} 
        retryAction={() => window.location.reload()} 
      />
    );
  }

  return (
    <div>
      <h1 className="filter-title">Filtrar por Especie</h1>
      
      <div className="filter-container">
        {speciesList.map((species) => (
          <button
            key={species}
            onClick={() => handleFilter(species)}
            className={`filter-button ${selectedSpecies === species ? 'active' : ''}`}
          >
            {species}
          </button>
        ))}
      </div>

      <p className="filter-count-text">
        Personajes encontrados: <strong className="filter-count-highlight">{filteredCharacters.length}</strong>
      </p>

      <div className="filter-grid">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1' }}>
            <ErrorMessage 
              message={`No se encontraron personajes de la especie "${selectedSpecies}" en esta dimensión.`} 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBySpecies;
