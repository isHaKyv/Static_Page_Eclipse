import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        {/* Cambia el enlace a un componente Link */}
        <Link to="/" className="logo">Slifer Red Store</Link>
        <ul className="nav-list">
          <li><a href="#">Acerca</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
