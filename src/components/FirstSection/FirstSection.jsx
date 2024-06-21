import React, { useState, useEffect } from 'react';
import './FirstSection.css';
import { Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/system';
import lpImg from '../../until/raya-p/LP.png'
import uniappLogo from '../../until/raya-p/UniApp BB.png'
import { useNavigate } from 'react-router';

const BlackLinearProgress = styled(LinearProgress)(({ theme }) => ({
    '& .MuiLinearProgress-bar': {
      backgroundColor: 'black',
    },
  }));

const FirstSection = () => {
      const [visible, setVisible] = useState(true);


    // const [isVisible, setIsVisible] = useState(true);

    const navigate = useNavigate();


    const transferToPage = () => {
        navigate('/uniapp');
    }

    // useEffect(() => {
    //     // Set a timeout to change visibility after 10 seconds (10000 ms)
    //     const timer = setTimeout(() => {
    //       setVisible(false);
    //     }, 10000);
    useEffect(() => {
        // Set a timeout to change visibility after 10 seconds (10000 ms)
        const timer = setTimeout(() => {
          setVisible(false);
        }, 5000);
    
        // Cleanup function to clear the timer if the component unmounts
        return () => clearTimeout(timer);
      }, []);
    

    // useEffect(() => {
    //     const timer = setInterval(() => {

    //         console.log('isVisible', isVisible);
    //         setIsVisible((prevIsVisible) => !prevIsVisible);
    //     }, 5000);

    //     return () => clearInterval(timer);
    // }, []);


    return (
        <>
            <div className='main-first-section'>
                <Container maxWidth="xl">
                    <div className='content'>
                        <div className='text-container'>
                            <img src={uniappLogo} alt='n'/>
                            <h2>Empowering International Education</h2>
                            <h3>Simplify the Admission Process, Scale Up,<br/> and Diversify Campuses Worldwide</h3>
                            <ArrowForwardIcon onClick={transferToPage} style={{ fontSize: '25px', border: '1px solid #000', borderRadius: '50%', padding: '5px', cursor: 'pointer' }} />
                        </div>
                        <div className='header-img'>
                            <img src={lpImg} alt="mobile image not found" className='mainImage' />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default FirstSection;
