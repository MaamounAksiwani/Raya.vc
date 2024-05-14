import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import WOW from 'wowjs';
const NotFound = () => {
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
        window.scrollTo(0, 0)
    }, [])
    return (
        <div style={{ padding: '100px 0' , backgroundColor:'#eee' , height:'100vh' }} className='wow fadeInDown' data-wow-duration='1.5s'>
            <Container maxWidth="lg">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <div>
                        <h2>Page Not Found</h2>
                        <p>Sorry, the requested page could not be found.</p>
                    </div>
                </div>
            </Container>

        </div>
    );
}

export default NotFound;