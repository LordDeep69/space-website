import React, { useEffect, useState } from 'react';
import './navbar.scss';
import hamburger from '../../assets/shared/icon-hamburger.svg';
import close from '../../assets/shared/icon-close.svg';
import { useNavigate, useParams, useLocation  } from 'react-router-dom';
import useScreenSize from '../../hooks/useScreenSize';


const Navbar = () => {



    const [selectedMenuItem, setSelectedMenuItem] = useState(0);
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

    const location = useLocation();
    const responsive = useScreenSize();

    useEffect(() => {

      const currentPath = location.pathname;
  

      if (currentPath === '/') {
        setSelectedMenuItem(0);
      } else if (currentPath === '/Destination/2') {
        setSelectedMenuItem(1);
      } else if (currentPath === '/Crew/2') {
        setSelectedMenuItem(2);
      } else if (currentPath === '/Technology/2') {
        setSelectedMenuItem(3);
      } else {
        setSelectedMenuItem(null);
      }
    }, [location.pathname]);
  
    

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    console.log('YA.');
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleMenuItemClick = (route) => {
    navigate(route);
    setIsMenuOpen(false);
  };

 

  return (
    <section>

        {responsive.width <= 375 && (
                        <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
                        {/* Ícono */}
                        <div className="icon" onClick={handleMenuToggle}>
                            {/* Aquí inserta tu ícono */}
                            <img src={hamburger} alt="Icono" />
                        </div>
            
                        {/* Menú */}
                        {isMenuOpen && (
                            <div className="menu-container">
                            {/* Contenido del menú */}
                            <div className="close" onClick={handleMenuToggle}>
                            {/* Aquí inserta tu ícono */}
                            <img src={close} alt="close" />
                        </div>
                        <ul>
                          <li
                            className={selectedItemIndex === 0 ? 'selected' : ''}
                            onClick={() => handleMenuItemClick('/', 0)}
                          >
                            Home
                          </li>
                          <li
                            className={selectedItemIndex === 1 ? 'selected' : ''}
                            onClick={() => handleMenuItemClick('/Destination/2', 1)}
                          >
                            Destination
                          </li>
                          <li
                            className={selectedItemIndex === 2 ? 'selected' : ''}
                            onClick={() => handleMenuItemClick('/Crew/2', 2)}
                          >
                            Crew
                          </li>
                          <li
                            className={selectedItemIndex === 3 ? 'selected' : ''}
                            onClick={() => handleMenuItemClick('/Technology/2', 3)}
                          >
                            Technology
                          </li>
                        </ul>
                            </div>
                        )}
                        </nav>
        )}

        {
            responsive.width > 375 && (

                
              <nav className="navbar-desktop">
              {/* Opciones de navegación */}
              <div onClick={() => handleMenuItemClick('/')} className={`navbar-item ${selectedMenuItem === 0 ? 'selected' : ''}`}>
                <b>00</b> HOME
              </div>
              <div onClick={() => handleMenuItemClick('/Destination/2')} className={`navbar-item ${selectedMenuItem === 1 ? 'selected' : ''}`}>
                <b>01</b> DESTINATION
              </div>
              <div onClick={() => handleMenuItemClick('/Crew/2')} className={`navbar-item ${selectedMenuItem === 2 ? 'selected' : ''}`}>
                <b>02</b> CREW
              </div>
              <div onClick={() => handleMenuItemClick('/Technology/2')} className={`navbar-item ${selectedMenuItem === 3 ? 'selected' : ''}`}>
                <b>03</b> TECHNOLOGY
              </div>
            </nav>
            
            )
        }

    </section>
  );
};

export default Navbar;
