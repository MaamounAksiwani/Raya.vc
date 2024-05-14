import React from 'react';
import './HomePage.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const HomePage = () => {
    return (
        <>
            <div className="background">
                <div className="overlay"></div>

                <div className="centered-text">
                    <h1>MAKE HISTORY</h1>
                </div>
                <div className="bottom-text">
                    <ArrowDownwardIcon className='arrow' />
                </div>
            </div>
            <h1>HELLo</h1>
        </>
    );
};

export default HomePage;

