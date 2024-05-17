import React, { useEffect, useRef, useState } from 'react';
import './HomePage.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import fullpage from 'fullpage.js';
import FirstSection from '../FirstSection/FirstSection';
import SecondSection from '../SecondSection/SecondSection';
import ThirdSection from '../ThirdSection/ThirdSection';
import FourthSection from '../FourthSection/FourthSection';

const HomePage = () => {
    const fullpageRef = useRef(null);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);
    let intervalId;

    useEffect(() => {
        const fullpageInstance = new fullpage('#fullpage', {
            sectionSelector: '.section',
            scrollingSpeed: 1000, // Set scrolling speed to 1 second (1000 milliseconds)
            touchSensitivity: 15,
            credits: { enabled: false},
            navigation: false,

            afterLoad: (origin, destination, direction) => {
                // Check if auto-scrolling is enabled and user has scrolled up
                // if (isAutoScrolling && direction === 'up') {
                //     // Disable auto-scrolling
                //     setIsAutoScrolling(false);
                // }
            },
        });

        // Assign fullPage.js API to the ref
        fullpageRef.current = fullpageInstance;

        // Start the interval when component mounts
        startInterval();

        // Clean up by destroying fullpage instance and clearing the interval
        return () => {
            fullpageInstance.destroy('all');
            clearInterval(intervalId);
        };
    }, [isAutoScrolling]);

    const moveNextSection = () => {
        if (fullpageRef.current) {
            fullpageRef.current.moveSectionDown();
        }
    };

    const startInterval = () => {
        // Move to the next section every 5 seconds if auto-scrolling is enabled
        intervalId = setInterval(() => {
            if (isAutoScrolling && fullpageRef.current) {
                fullpageRef.current.moveSectionDown();
            }
        }, 5000);
    };

    return (
        <div id='fullpage'>
            <div className='section'>
                <div className="background">
                    <div className="overlay"></div>
                    <div className="centered-text">
                        <h1>MAKE THE HISTORY</h1>
                    </div>
                    <div className="bottom-text">
                        <ArrowDownwardIcon
                            className='arrow'
                            style={{ fontSize: '30px', border: '1px solid #000', marginBottom:'30px', borderRadius: '50%', padding: '2px' }}
                            onClick={moveNextSection}
                        />
                    </div>
                </div>
            </div>

            <div className='section'>
                <FirstSection />
            </div>

            <div className='section'>
                <SecondSection />
            </div>

            <div className='section'>
                <ThirdSection />
            </div>

            <div className='section'>
                <FourthSection />
            </div>
        </div>
    );
};

export default HomePage;


