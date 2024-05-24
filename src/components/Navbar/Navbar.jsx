import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import rayaLogo from '../../until/image-2-removebg-preview.png';
import MenuContent from '../MenuContent/MenuContent';
import WOW from 'wowjs';
import { useNavigate } from 'react-router';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [animationClass, setAnimationClass] = useState('bounceInDown');


  const toggleMenu = () => {
    if (isMenuOpen) {
      setAnimationClass('bounceOutUp');
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 1000);
    } else {
      setIsMenuOpen(true);
      setAnimationClass('bounceInDown');
    }
  };

  const handleClick = () => {
    setIsMenuOpen(false)
    navigate('/');
    console.log('handleClick');
  };

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, [])

  return (
    <div style={{ position: 'fixed', width: '100%', zIndex: 1000 }}>
      <div style={{ background: '#000' }}>
        <Container maxWidth='xl'>
          <div className='container-navbar'>
            <img src={rayaLogo} alt='Raya Logo' onClick={() => handleClick()} />
            <div style={{cursor:'pointer'}} onClick={toggleMenu}>
              <div className={`nav-icon2 ${isMenuOpen ? 'open' : ''}`} id="nav-icon2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            {/* {isMenuOpen ? (
              <HighlightOffIcon
                style={{ fontSize: '30px' }}
                className={`burgerMenu ${animationClass}`}
                onClick={toggleMenu}
              />
            ) : (
              <MenuIcon
                style={{ fontSize: '30px' }}
                className={`burgerMenu ${animationClass}`}
                onClick={toggleMenu}
              />
            )} */}
          </div>
        </Container>
      </div>
      {isMenuOpen && (
        // osition: 'absolute', zIndex: 1100, width: '100%'
        <div>
          <MenuContent
            setIsMenuOpen={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
            animationClass={animationClass}
            setAnimationClass={setAnimationClass}
            toggleMenu={toggleMenu}
          />
        </div>
      )}

    </div>
  );
};

export default Navbar;
