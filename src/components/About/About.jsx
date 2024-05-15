import React , {useEffect} from 'react';
import './About.css';
import WOW from 'wowjs';
const About = () => {

    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
        window.scrollTo(0, 0)
      }, []);

    return (
        <div className='about wow fadeInDown' data-wow-duration='1.5s'>
            <div className='main-container' style={{ textAlign: 'center' }}>
                <div className='container'>
                    <h1>ABOUT RAYA VS</h1>
                    <p>
                        For five decades we have partnered with intrepid founders
                        to build iconic companies that made history. Today, Kleiner
                        Perkins continues that legacy, investing in founders with
                        bold ideas that span industries and continents, partnering
                        with them from inception to IPO and beyond to maximize the
                        potential of their ideas… and make history.
                    </p>
                </div>

            </div>

            <div className='main-container' style={{ textAlign: 'center' }}>
                <div className='container'>
                    <h1 >OUR MISSION</h1>
                    <p>
                        To be the first call for founders who want to make history and to partner <br /> with them as company builders in pursuit of that goal.
                    </p>
                </div>

            </div>


            <div className='main-container'>
                <div className='container'>
                    <h1 style={{ textAlign: 'center' }}>OUR ETHOS</h1>
                    <div className='box-content'>
                        <h2>Moral compass</h2>
                        <span>Our North Star is serving humanity with the tools at our disposal — people, technology and capital —
                            and we work with founders who share this compass.
                        </span>
                    </div>

                    <div className='box-content'>
                        <h2>Empathy</h2>
                        <span>Building a company is a long journey that demands courage to make difficult and sometimes unpopular decisions. We have
                            traveled this road many times and have a deep understanding of the challenges facing founders.

                        </span>
                    </div>

                    <div className='box-content'>
                        <h2>Humility</h2>
                        <span>
                            We never forget that we are here to serve founders and their teams to help them get through the biggest
                            challenges. We take nothing for granted and never assume we have all the answers.
                        </span>
                    </div>

                    <div className='box-content lastOne'>
                        <h2>Winning as a mindset
                        </h2>
                        <span>
                            We are as ambitious as our founders and know winning requires passion, grit, and dynamic
                            and orthogonal thinking that comes from diverse expertise and experience.
                        </span>
                    </div>

                    <div className='main-container' style={{ textAlign: 'center', marginTop: '75px' }}>
                        <div className=''>
                            <h1>OUR VALUES</h1>

                        </div>



                    </div>

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
        </div>

    );
};

export default About;

