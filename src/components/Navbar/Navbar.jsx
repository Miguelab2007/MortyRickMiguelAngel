import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo logo-font">WUBBA LUBBA DUB DUB</div>
      <ul className="navbar-ul">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'navbar-link-active' : 'navbar-link')}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/all" 
            className={({ isActive }) => (isActive ? 'navbar-link-active' : 'navbar-link')}
          >
            Todos los personajes
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/filter" 
            className={({ isActive }) => (isActive ? 'navbar-link-active' : 'navbar-link')}
          >
            Filtrar por Especie
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
