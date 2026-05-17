import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = ({ message, retryAction }) => {
  return (
    <div className="error-display-container">
      <div className="error-icon">🛸</div>
      <h2 className="error-display-title">¡Error Interdimensional!</h2>
      <p className="error-display-text">{message || 'Algo salió mal en el multiverso.'}</p>
      {retryAction && (
        <button onClick={retryAction} className="error-retry-button">
          Reintentar viaje
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
