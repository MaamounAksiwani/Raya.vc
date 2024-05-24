
import './ThirdSection.css';

import React, { useEffect } from 'react';
import WOW from 'wowjs';

const ThirdBYID = () => {

    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
        window.scrollTo(0, 0)
    }, []);
    return (
        <div className='about byID wow fadeInDown' data-wow-duration='1.5s'>
            <div className='main-container' style={{ textAlign: 'center', paddingBottom: '25px' }}>
                <div className='container'>
                    <h2>DoorDash: delivering the future of local</h2>
                    <p>
                        Wednesday, December 09, 2020
                    </p>
                </div>
            </div>
            <div className='main-container'>
                <div className='container'>
                    <div className='box-content img-header'>
                        <img src='https://cdn.sanity.io/images/ti7si9cx/production/cbe40a4512762659b2216928f404729e7bd572cd-2044x442.jpg?w=1382' alt='../' />
                    </div>

                    <div style={{ paddingTop: '25px' }}>
                        <h2 style={{ paddingBottom: '10px' }}>Empathy</h2>
                        <span>Building a company is a long journey that demands courage to make difficult and sometimes unpopular decisions. We have
                            traveled this road many times and have a deep understanding of the challenges facing founders.

                            We are as ambitious as our founders and know winning requires passion, grit, and dynamic
                            and orthogonal thinking that comes from diverse expertise and experience.

                            We never forget that we are here to serve founders and their teams to help them get through the biggest
                            challenges. We take nothing for granted and never assume we have all the answers.

                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ThirdBYID;
