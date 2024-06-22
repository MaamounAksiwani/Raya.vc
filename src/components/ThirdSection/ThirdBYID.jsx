
import './ThirdSection.css';
import React, { useEffect } from 'react';
import WOW from 'wowjs';
import psImage from '../../until/raya-p/Ps.png'
import mainImage from '../../until/raya-p/W.png'
import plImage from '../../until/raya-p/PL.png'
const ThirdBYID = () => {

    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        document.title = "Uniapp | Raya";
        return () => {
            document.title = "";
        };
    }, []);
    return (
        <div className='about byID wow fadeInDown' data-wow-duration='1.5s'>
            <div className='main-container'>
                <div className='container'>
                    <div className='img-header'>
                        <img src={mainImage} alt='../' />
                    </div>


                    <div>
                        <h1 className='uniapp-title'>Transforming Global Education</h1>
                    </div>



                    <div style={{ padding: '25px 0 ' }}>
                        <h2>01.Learn What UniApp Is Doing</h2>
                        <p>UniApp is an innovative education technology company dedicated to supporting international education stakeholders. The platform simplifies
                            the admission process, scales up, and diversifies campuses worldwide, ensuring that students can seamlessly navigate their educational journeys</p>
                    </div>

              

                    <div style={{ padding: '25px 0 ' }}>
                        <h2>02.Global Mission</h2>
                        <p>
                            UniApp is driven by a global mission to empower international education and ensure everyone has access to quality learning opportunities. The company is
                            passionate about bringing the best education to study seekers around the globe
                        </p>
                    </div>

                    <div style={{ padding: '25px 0' }}>
                        <h2>03.Recent Achievements</h2>
                        <p>UniApp recently raised over two million euros in Seed and pre-A funding rounds, enabling the company to expand its global presence. CEO and founder, Fahed Jaarah, emphasized the importance of scaling
                            quickly due to the high demand from sub-agents eager to join the network and access partner schools.</p>

                    </div>

                    <div style={{ padding: '25px 0' }}>
                        <h2>04.Vision</h2>
                        <p>Founded in 2021, UniApp is dedicated to supporting international education
                            stakeholders by simplifying the admissions process and enhancing campus diversity.
                            Investors are eager to participate, sharing the belief that international students are economically vital. Their unique skills and
                            fresh perspectives drive economic growth, fostering a more diverse and prosperous Europe.</p>

                    </div>


                    <div className='box-content img-header'>
                    <img src={psImage} alt='image not found '/>
                    </div>

                    <div style={{ padding: '25px 0 ' }}>
                        <h2>05.How UniApp Works</h2>
                        <p>
                        The App and online platform offers a comprehensive, one-stop solution for students managing 
                        their application processes. Whether applying for the first time or transferring to a different 
                        institution, users can upload their academic and personal documents once and apply for multiple programs. 
                        With thousands of study courses available, the AI-based search engine provides tailored course suggestions, simplifying the decision-making process.
                        </p>

                    </div>


                    <div className='box-content img-header'>
                    <img src={plImage} alt='image not found '/>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default ThirdBYID;
