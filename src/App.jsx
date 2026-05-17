import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import BackToTop from './components/BackToTop/BackToTop';
import Home from './pages/Home/Home';
import FilterBySpecies from './pages/FilterBySpecies/FilterBySpecies';
import CharacterDetail from './pages/CharacterDetail/CharacterDetail';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <BackToTop />
        <main style={{ padding: '20px', flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all" element={<Home />} />
            <Route path="/filter" element={<FilterBySpecies />} />
            <Route path="/character/:id" element={<CharacterDetail />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <footer style={styles.footer}>
          <p style={styles.footerText}>By: Miguel Angel Buitron Becerra</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

const styles = {
  footer: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: 'rgba(10, 25, 47, 0.8)',
    borderTop: '1px solid #00f0ff',
    marginTop: '40px'
  },
  footerText: {
    margin: 0,
    fontSize: '0.9rem',
    color: '#8892b0',
    fontFamily: "'Orbitron', sans-serif",
    letterSpacing: '2px',
    opacity: 0.8
  }
};

export default App;
