import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';

import './History.css';
import WOW from 'wowjs';
const History = () => {

    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
    }, [])
    return (



        <div className='about wow fadeInDown' data-wow-duration='1.5s'>
            <div className='main-container'>
                <div className='container' style={{ paddingBottom: '25px' }}>
                    <h1>OUR HISTORY</h1>
                    <h2>The Early Years</h2>
                    <p>
                        In the 1970s, venture capital as we know it today was an untested source of capital to entrepreneurs
                        and an unproven vehicle for returns to institutional investors. Tom Perkins and Eugene Kleiner had a vision
                        of building a venture fund that would invest capital and resources in the best entrepreneurs with bold ideas.
                        Five decades later, it is a model of venture investing that is still flourishing at Kleiner Perkins. Kleiner Perkins and KPCB I.
                    </p>
                </div>

            </div>



            <div className='container' style={{ paddingTop: '0' }}>

                <div className='images'>

                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/906d4ad287ebdcb955c0951fd9df25dfeb883723-512x384.png' alt='...' />

                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/2f8752d49e27ac96deca34b7cb95b486876f597f-296x43.svg' alt='...' />

                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/1527a34a07f11f6609edbc089cc6527b47f86c7b-256x192.png' alt='...' />

                </div>
            </div>


            <div className='main-container' style={{ padding: '20px 0' }}>
                <div className='container'>
                    <div className='box-content'>
                        <h2>Momentum Grows</h2>
                        <p>Eight years after launch, Kleiner Perkins set out to raise a third fund and broaden the team to invest
                            in semiconductors, databases and computing. The venture community was beginning to grow teaming together
                            in a syndicated style of investing. As the Kleiner Perkins investment portfolio grew, so did our network
                            of relationships—and we were able to expand the level of support we could provide to entrepreneurs. KPCB II, KPCB III and KPCB IV.

                        </p>
                    </div>



                </div>

            </div>


            <div className='container'>

                <div className='images'>
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/3e07ae818d4268471345c66c99e2a521cee65994-256x101.png' alt='...' />

                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/7a2b2bd2dec4b6576b12d4bc62987ad1a6ec5899-512x384.png' alt='...' />

                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/e6522f6619a2e4f0068deb2391ba06563d6c7e1c-256x96.png' alt='...' />

                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/eee6022e1ca3b177f11b2939ccd498c945a0c2d1-512x384.png' alt='...' />

                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/97e0dec7c6d8e3402655018c06253d57a95967a8-512x384.png' alt='...' />

                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/7d009a4be266a7639d8e2558e8ed0d4ce46fb7fd-512x384.png' alt='...' />
                </div>
            </div>


            <div className='container'>
                <div className='box-content'>
                    <h2>Desktop Computing evolves and Biotech Booms
                    </h2>
                    <p>We continued to make notable investments in technology as desktop computing evolved to provide powerful applications,
                        online communication for the masses and remote access with investments in Intuit, AOL, Citrix and Visio. The success
                        of Genentech in the early 1980s also established the foundation for the biotech sector to flourish and Kleiner Perkins
                        , with strong ties to Stanford University and UCSF medical centers, expanded its investment footprint in the sector. KPCB
                        V, KPCB VI and KPCB VII
                    </p>
                </div>
            </div>


            <div className='main-container' style={{ textAlign: 'center', marginTop: '75px' }}>
                <div className=''>
                    <h1>In Pursuit of Cleantech</h1>

                </div>

            </div>


            <div className='container'>
                <div className='box-content'>
                    <h2>One Team, One Dream</h2>
                    <span>
                        We operate in a culture of transparency, teamwork and trust to fulfill our company vision of
                        partnering with companies that make history. We know how each individual role plays a part in the success
                        of Kleiner Perkins and everyone’s work matters.


                    </span>
                </div>

                <div className='box-content'>
                    <h2>Pride in Excellence</h2>
                    <span>
                        We take ownership and pride in our work. We set a high bar and sweat the details, holding ourselves accountable
                        to the stretch goals, OKRs and
                        objectives we have set, always striving to get better.
                    </span>
                </div>

            </div>
        </div>



    );
};

export default History;

