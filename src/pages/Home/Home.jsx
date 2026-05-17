import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllCharacters } from '../../services/api';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import './Home.css';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  
  const isAllCharactersView = location.pathname === '/all';
  const charactersPerPage = 20;

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getAllCharacters();
        setCharacters(data);
      } catch (err) {
        console.error('Error fetching characters:', err);
        setError('Error interdimensional: No pudimos conectar con la Ciudadela de Ricks.');
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, location.pathname]);

  const filteredCharacters = characters.filter((char) =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCharacters.length / charactersPerPage);
  
  const currentCharacters = isAllCharactersView 
    ? filteredCharacters 
    : filteredCharacters.slice((currentPage - 1) * charactersPerPage, currentPage * charactersPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      if (currentPage > 3) pageNumbers.push('...');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pageNumbers.push(i);
      if (currentPage < totalPages - 2) pageNumbers.push('...');
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
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
      <h1 className="home-title">
        {isAllCharactersView ? 'Todos los Personajes' : 'Rick and Morty Multiverse'}
      </h1>
      
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="home-grid">
        {currentCharacters.length > 0 ? (
          currentCharacters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))
        ) : (
          <p className="home-no-results">
            No se encontraron personajes con ese nombre.
          </p>
        )}
      </div>

      {!isAllCharactersView && totalPages > 1 && (
        <div className="home-pagination">
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="home-nav-button">&laquo;</button>
          {getPageNumbers().map((number, index) => (
            <button
              key={index}
              onClick={() => typeof number === 'number' && paginate(number)}
              className={`home-page-button ${currentPage === number ? 'active' : ''} ${typeof number !== 'number' ? 'ellipsis' : ''}`}
              disabled={typeof number !== 'number'}
            >
              {number}
            </button>
          ))}
          <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="home-nav-button">&raquo;</button>
        </div>
      )}
      
      <div style={{ marginBottom: '50px' }}></div>
    </div>
  );
};

export default Home;
