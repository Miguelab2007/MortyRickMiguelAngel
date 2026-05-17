import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">404</h1>
      <h2 className="error-subtitle">¡Wubba Lubba Dub Dub!</h2>
      <p className="error-text">La página que buscas no existe en este universo.</p>
      <Link to="/" className="error-link">
        Regresar al portal de inicio
      </Link>
    </div>
  );
};

export default ErrorPage;
