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


  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
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
            {isMenuOpen ? (
              <HighlightOffIcon style={{ fontSize: '30px' }} className='burgerMenu' onClick={toggleMenu} />
            ) : (
              <MenuIcon style={{ fontSize: '30px' }} className='burgerMenu' onClick={toggleMenu} />
            )}
          </div>
        </Container>
      </div>
      {isMenuOpen && (
  <div style={{ position: 'absolute', zIndex: 1100 , width:'100%' }}>
    <MenuContent setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
  </div>
)}

    </div>
  );
};

export default Navbar;



// // import React, { useState } from 'react';
// import { Container } from '@mui/material';
// import './Navbar.css';
// import MenuIcon from '@mui/icons-material/Menu';
// import HighlightOffIcon from '@mui/icons-material/HighlightOff';
// import rayaLogo from '../../until/image-2-removebg-preview.png';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//     console.log('HELLo');
//   };

//   return (
//     <div style={{ position: 'fixed', width: '100%', zIndex: 1000 }}>
//       <div style={{ background: '#000' }}>
//         <Container maxWidth='xl'>
//           <div className='container-navbar'>
//             <img src={rayaLogo} alt='Raya Logo' />
//            <div>
//            <div id="nav-icon2" className={`nav-icon2 ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
//               <span></span>
//               <span></span>
//               <span></span>
//               <span></span>
//               <span></span>
//               <span></span>
//             </div>
//            </div>
//           </div>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
