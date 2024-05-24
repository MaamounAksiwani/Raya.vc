import React, { useEffect, useRef, useState } from 'react';
import './HomePage.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import fullpage from 'fullpage.js';
import FirstSection from '../FirstSection/FirstSection';
import SecondSection from '../SecondSection/SecondSection';
import WOW from 'wowjs';

import ThirdSection from '../ThirdSection/ThirdSection';
import FourthSection from '../FourthSection/FourthSection';

const HomePage = () => {
    const fullpageRef = useRef(null);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);
    let intervalId;

    useEffect(() => {
        const fullpageInstance = new fullpage('#fullpage', {
            sectionSelector: '.section',
            scrollBar: false,
            scrollingSpeed: 1000, // Set scrolling speed to 1 second (1000 milliseconds)
            touchSensitivity: 15,
            credits: { enabled: false },
            navigation: false,
            

            afterLoad: (origin, destination, direction) => {
                // Check if auto-scrolling is enabled and user has scrolled up
                // if (isAutoScrolling && direction === 'up') {
                //     // Disable auto-scrolling
                //     setIsAutoScrolling(false);
                // }
            },
        });

        fullpageRef.current = fullpageInstance;
        startInterval();
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
        intervalId = setInterval(() => {
            if (isAutoScrolling && fullpageRef.current) {
                fullpageRef.current.moveSectionDown();
            }
        }, 10000);


    };

    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
        <div id='fullpage'>
            <div className='section'>
                <div className="background">
                    <video data-keepplaying="true" playsinline="" autoplay="" loop muted class="show hero__video hero__background-video hero__height">
                        <source src="https://cdn.sanity.io/files/ti7si9cx/production/062ad65624568ca35aa36ed0abbaa5d072d678a1.mp4" type="video/mp4" />
                    </video>
                    <div className="overlay"></div>
                    <div className="centered-text">
                        <h1>MAKE HISTORY</h1>
                    </div>
                    <div className="bottom-text">
                        <ArrowDownwardIcon
                            className='arrow'
                            style={{ fontSize: '30px', border: '1px solid #000', marginBottom: '30px', borderRadius: '50%', padding: '2px' }}
                            onClick={moveNextSection}
                        />
                    </div>
                </div>
            </div>


            <div class="section" data-percentage="80" data-centered="true">
                <FirstSection />
            </div>

            <div class="section" data-percentage="80" data-centered="true">
                <SecondSection />
            </div>

            <div class="section" data-percentage="80" data-centered="true">
                <ThirdSection />
            </div>

            <div className='section'>
                <FourthSection />
            </div>
        </div>

        </>
    );
};

export default HomePage;


