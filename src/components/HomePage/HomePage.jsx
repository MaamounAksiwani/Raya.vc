import React, { useEffect, useRef, useState } from 'react';
import './HomePage.css';
import WOW from 'wowjs';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FirstSection from '../FirstSection/FirstSection';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import SecondSection from '../SecondSection/SecondSection';
import ThirdSection from '../ThirdSection/ThirdSection';
import FourthSection from '../FourthSection/FourthSection'; // Import FourthSection
import { Container } from '@mui/material';

const HomePage = () => {
    const headerRef = useRef(null);
    const secondSectionRef = useRef(null);
    const thirdSectionRef = useRef(null);
    const fourthSectionRef = useRef(null); // Reference for FourthSection
    const [autoScrollInterval, setAutoScrollInterval] = useState(null);

    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
        window.scrollTo(0, 0);
    }, []);

    const handleArrowClick = () => {
        headerRef.current?.scrollIntoView({
            behavior: 'smooth'
        });

        // Start auto scroll after 5 seconds
        const interval = setTimeout(() => {
            secondSectionRef.current?.scrollIntoView({
                behavior: 'smooth'
            });

            // Scroll to third section after another 5 seconds
            setAutoScrollInterval(setTimeout(() => {
                thirdSectionRef.current?.scrollIntoView({
                    behavior: 'smooth'
                });

                // Scroll to fourth section after third section is scrolled to
                setAutoScrollInterval(setTimeout(() => {
                    fourthSectionRef.current?.scrollIntoView({
                        behavior: 'smooth'
                    });
                }, 5000));
            }, 5000));
        }, 5000);

        // Clear interval on unmount or when scrolled manually
        return () => {
            clearTimeout(interval);
            clearTimeout(autoScrollInterval);
        };
    };

    return (
        <div className='wow fadeInDown' data-wow-duration='1.5s'>
            <div className="background">
                <div className="overlay"></div>
                <div className="centered-text">
                    <h1>MAKE THE HISTORY</h1>
                </div>
                <div className="bottom-text">
                    <ArrowDownwardIcon
                        className='arrow'
                        style={{ fontSize: '30px', border: '1px solid #000', borderRadius: '50%', padding: '2px' }}
                        onClick={handleArrowClick}
                    />
                </div>
            </div>



            <div ref={headerRef} id='FirstSection'>
                <FirstSection />
            </div>


            {/* <Container maxWidth='xl'>
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
            </Container> */}

            <div ref={secondSectionRef} id='SecondSection'>
                <SecondSection />
            </div>
            <div ref={thirdSectionRef} id='ThirdSection'>
                <ThirdSection />
            </div>
            <div ref={fourthSectionRef} id='FourthSection'>
                <FourthSection />
            </div>
        </div>
    );
};

export default HomePage;
