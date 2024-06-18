import React from 'react';
import './SecondSection.css';
import { Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router';
const SecondSection = () => {
    
    const navigate = useNavigate();
  const transferToPage = ()=>{
        navigate('/uniapp');
    }
    return (
        <div className='main-first-section other'>
            <Container maxWidth="xl">
                <div className='content'>
                    <div className='text-container'>
                        
                        <img src='https://cdn.sanity.io/images/ti7si9cx/production/e0e6e2c8939008217eb76a3b3282ca75f3dc401a-74x24.svg?w=500&fm=webp&auto=format' alt='n'/>
                        <h2>BIG DATA AND INTELLIGENCE <br /> SOFTWARE FOR SECURITY ANALYTICS</h2>
                        <ArrowForwardIcon onClick={transferToPage} style={{fontSize:'30px' , border:'1px solid #000' , borderRadius:'50%' , padding:'5px' , cursor:'pointer'}}/>
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
