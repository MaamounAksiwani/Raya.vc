import React, { useEffect, useRef } from 'react';
import './HomePage.css';
import WOW from 'wowjs';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FirstSection from '../FirstSection/FirstSection';
const HomePage = () => {

    const headerRef = useRef(null);
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='wow fadeInDown' data-wow-duration='1.5s'>
            <div className="background">
                <div className="overlay"></div>

                <div className="centered-text">
                    <h1>MAKE THE HISTORY</h1>
                </div>
                <div className="bottom-text">
                    <ArrowDownwardIcon className='arrow' style={{fontSize:'30px' , border:'1px solid #000' , borderRadius:'50%' , padding:'2px'}} onClick={() => {
                        headerRef.current?.scrollIntoView({
                            behavior: 'smooth'
                        })
                    }} />
                </div>
            </div>
            <h1 ref={headerRef} id='header' >
                <FirstSection />

            </h1>
        </div>
    );
};

export default HomePage;

