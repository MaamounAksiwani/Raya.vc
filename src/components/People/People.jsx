import React, { useEffect } from 'react';
import './People.css';
import WOW from 'wowjs';
import { Container } from '@mui/material';

const People = () => {
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
        window.scrollTo(0, 0)
    }, [])

    const cardData = [
        { id: 1, title: 'Card 1', imageUrl: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 2, title: 'Card 2', imageUrl: 'https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
        { id: 3, title: 'Card 3', imageUrl: 'https://images.pexels.com/photos/16742380/pexels-photo-16742380/free-photo-of-young-man-with-a-stubble-wearing-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 4, title: 'Card 4', imageUrl: 'https://images.pexels.com/photos/15004155/pexels-photo-15004155/free-photo-of-portrait-of-a-man-with-a-stubble.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 5, title: 'Card 5', imageUrl: 'https://images.pexels.com/photos/18199741/pexels-photo-18199741/free-photo-of-portrait-of-a-black-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 6, title: 'Card 6', imageUrl: 'https://images.pexels.com/photos/9607118/pexels-photo-9607118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    ];
    return (
        <div className='main-people'>

            <Container maxWidth='xl'>

                <div className='wow fadeInDown' data-wow-duration='1.5s'>
                    <h1>SHAPING HISTORY TOGETHER</h1>

                    <div className="card-container">
                        {cardData.map((card) => (
                            <div key={card.id} className="card">
                                <img className="card-image" src={card.imageUrl} alt={card.title} />
                                <div className="card-overlay">
                                    {/* <h2>{card.title}</h2> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </Container>
        </div>
    );
}

export default People;