import React from 'react';
import './FourthSection.css';
import { Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router';
const FourthSection = () => {
    
    const navigate = useNavigate();
  const transferToPage = ()=>{
        navigate('/uniapp');
    }
    return (
        <div className='main-first-section'>
            <Container maxWidth="xl">
                <div className='content'>
                    <div className='text-container'>
                        <img src='https://cdn.sanity.io/images/ti7si9cx/production/4ecee26e691365d787b1faabbed5da83c50ac5e4-256x52.png?w=500&fm=webp&auto=format' alt='n'/>
                        <h2>BIG DATA AND INTELLIGENCE <br /> SOFTWARE FOR SECURITY ANALYTICS</h2>
                        <ArrowForwardIcon onClick={transferToPage} style={{fontSize:'30px' , border:'1px solid #000' , borderRadius:'50%' , padding:'5px' , cursor:'pointer'}}/>
                    </div>
                    <div className='header-img'>
                        <img src='https://ae04.alicdn.com/kf/Sce3f330cc4b3475b9570416b3556ce2bw.jpg' alt="mobile image not found" className='mainImage' />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default FourthSection;
