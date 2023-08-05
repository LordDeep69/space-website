import React from 'react';
import Navbar from '../navbar/Navbar';
import logo from '../../assets/shared/logo.svg';
import './header.scss';

const Header = () => {
  return (
    <header className="header-container">
      {/* Logo en el extremo izquierdo */}
      <div className="logo">
        <figure className='containerLogo'>
          <img src={logo} alt="Logo" />
        </figure>
      </div>

      {/* Componente Navbar en el extremo derecho */}
      <Navbar />

      {/* Línea de fondo */}
      {/* <div className="line"></div> */}
    </header>
  );
};

export default Header;
