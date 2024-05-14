import React, { useState, useEffect } from 'react';
import './MenuContent.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import WOW from 'wowjs';
import { useNavigate } from 'react-router';
const MenuContent = ({ setIsMenuOpen, isMenuOpen }) => {

    const navigate = useNavigate();

    const toggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const transferPage = ()=>{
        navigate('/about');
        setIsMenuOpen(!isMenuOpen)
    }

    const peoplePage = ()=>{
        navigate('/people')
        setIsMenuOpen(!isMenuOpen)
    }

    const partnershipsPage = ()=>{
        navigate('/partnerships')
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
    }, [])
    return (
        <>
            {isMenuOpen && <div className='body-menu-content wow bounceInDown' data-wow-duration='2s'>
                <div>
                    <HighlightOffIcon onClick={toggle} style={{ fontSize: '55px', cursor: 'pointer' }} />
                    <h1 onClick={transferPage}>About</h1>
                    <h1 onClick={peoplePage}>People</h1>
                    <h1 onClick={partnershipsPage}>Partnerships</h1>
                    <h2>Our History</h2>
                </div>
            </div>}

        </>

    );
};

export default MenuContent;

