import React, { useEffect, useState } from 'react';
import './MenuContent.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import WOW from 'wowjs';
import { useNavigate } from 'react-router';

const MenuContent = ({ setIsMenuOpen, isMenuOpen , setAnimationClass, animationClass }) => {
    const navigate = useNavigate();
    // const [animationClass, setAnimationClass] = useState('bounceInDown');

    const toggle = () => {
        setAnimationClass('bounceOutUp');
        setTimeout(() => {
            setIsMenuOpen(false);
            setAnimationClass('bounceInDown'); 
        }, 1000);
    };

    const transferPage = () => {
        setAnimationClass('bounceOutUp');
        setTimeout(() => {
            navigate('/about');
            setIsMenuOpen(false);
            setAnimationClass('bounceInDown');
        }, 1000);
    };

    const peoplePage = () => {
        setAnimationClass('bounceOutUp');
        setTimeout(() => {
            navigate('/people');
            setIsMenuOpen(false);
            setAnimationClass('bounceInDown');
        }, 1000);
    };

    const partnershipsPage = () => {
        setAnimationClass('bounceOutUp');
        setTimeout(() => {
            navigate('/partnerships');
            setIsMenuOpen(false);
            setAnimationClass('bounceInDown');
        }, 1000);
    };

    const historyPage = () => {
        setAnimationClass('bounceOutUp');
        setTimeout(() => {
            navigate('/history');
            setIsMenuOpen(false);
            setAnimationClass('bounceInDown');
        }, 1000);
    };

    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
    }, []);

    return (
        <>
            {isMenuOpen && (
                <div className={`body-menu-content wow ${animationClass}`} data-wow-duration='2s'>
                    <div>
                        <HighlightOffIcon onClick={toggle} style={{ fontSize: '55px', cursor: 'pointer' }} />
                        <h1 onClick={transferPage}>About</h1>
                        <h1 onClick={peoplePage}>People</h1>
                        <h1 onClick={partnershipsPage}>Partnerships</h1>
                        <h2 onClick={historyPage}>Our History</h2>
                    </div>
                </div>
            )}
        </>
    );
};

export default MenuContent;
