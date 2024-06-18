import React from 'react';
import './ThirdSection.css';
import { Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router';

const ThirdSection = () => {
    const navigate = useNavigate();

    
    const transferToPage = ()=>{
        navigate('/uniapp');
    }
    return (
        <div className='main-first-section'>
            <Container maxWidth="xl">
                <div className='content'>
                    <div className='text-container'>
                        <img src='https://cdn.sanity.io/images/ti7si9cx/production/729e033670e43de38cd27a9916ce9ed5344d787e-1035x122.png?w=500&fm=webp&auto=format' alt='n'/>
                        <h2>BIG DATA AND NTELLIGENCE <br /> SOFTWARE FOR SECURITY ANALYTICS</h2>
                        <ArrowForwardIcon   onClick={transferToPage} style={{fontSize:'30px' , border:'1px solid #000' , borderRadius:'50%' , padding:'5px' , cursor:'pointer'}}/>
                    </div>
                    <div className='header-img'>
                        <img src='https://m.media-amazon.com/images/I/51-dF-r1ZxL._SS400_.jpg' alt="mobile image not found" className='mainImage' />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ThirdSection;
