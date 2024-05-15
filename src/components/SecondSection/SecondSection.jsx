import React from 'react';
import './SecondSection.css';
import { Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SecondSection = () => {
    return (
        <div className='main-first-section'>
            <Container maxWidth="xl">
                <div className='content'>
                    <div className='text-container'>
                        <img src='https://cdn.sanity.io/images/ti7si9cx/production/8fbd2093763dea8c48af1aacdbe212cadd03fbc1-256x82.png?w=500&fm=webp&auto=format' alt='n'/>
                        <h2>BIG DATA AND INTELLIGENCE <br /> SOFTWARE FOR SECURITY ANALYTICS</h2>
                        <ArrowForwardIcon style={{fontSize:'30px' , border:'1px solid #000' , borderRadius:'50%' , padding:'5px' , cursor:'pointer'}}/>
                    </div>
                    <div className='header-img'>
                        <img src='https://jpmorgantech.co/wp-content/uploads/2022/08/about.png' alt="mobile image not found" className='mainImage' />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default SecondSection;
