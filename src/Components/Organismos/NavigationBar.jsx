import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="logo text-white">
        <Link to="/" className="text-xl font-bold">
          Slifer Red Store
        </Link>
      </div>
      <div className="nav-links space-x-4">
        <Link to="/" className="text-white">
          Inicio
        </Link>
        <Link to="/contacto" className="text-white">
          Contacto
        </Link>
        <Link to="/sobre-nosotros" className="text-white">
          Sobre Nosotros
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
