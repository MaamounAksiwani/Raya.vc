import React , {useState ,useEffect} from 'react';
import './FirstSection.css';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const FirstSection = () => {

    const [isVisible, setIsVisible] = useState(true);

    
    useEffect(() => {
        const timer = setInterval(() => {

            console.log('isVisible', isVisible);
            setIsVisible((prevIsVisible) => !prevIsVisible);
        }, 5000);

        return () => clearInterval(timer);
    }, []);


    return (
        <div className='main-first-section'>
            <Container maxWidth="xl">
                <div className='content'>
                    <div className='text-container'>
                        <img src='https://cdn.sanity.io/images/ti7si9cx/production/8fbd2093763dea8c48af1aacdbe212cadd03fbc1-256x82.png?w=500&fm=webp&auto=format' alt='n' />
                        <h2>BIG DATA AND INTELLIGENCE <br /> SOFTWARE FOR SECURITY ANALYTICS</h2>
                        <ArrowForwardIcon style={{ fontSize: '30px', border: '1px solid #000', borderRadius: '50%', padding: '5px', cursor: 'pointer' }} />
                    </div>
                    <div className='header-img'>
                        <img src='https://cdn.dribbble.com/userupload/4251441/file/original-614108275822ca2f6fbe3d54dde064a7.png?resize=752x' alt="mobile image not found" className='mainImage' />
                    </div>
                </div>





            </Container>

            {/* <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 999 }}>
                {isVisible && <LinearProgress />}
            </div> */}


            {/* <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 999 }}>
                {isVisible && <LinearProgress />}
            </div> */}

                {/* <div className='LinearProgress' >

                    <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>

                </div> */}
        </div>
    );
}

export default FirstSection;



/**
 * 
 * const HomePage = () => {
    const headerRef = useRef(null);
    const secondSectionRef = useRef(null);
    const thirdSectionRef = useRef(null);
    const fourthSectionRef = useRef(null);

    const sectionRefs = [headerRef, secondSectionRef, thirdSectionRef, fourthSectionRef];
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
        window.scrollTo(0, 0);
    }, []);

    const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    };

    useEffect(() => {
        let isThrottled = false;

        const onScroll = (event) => {
            if (isThrottled) return;
            isThrottled = true;

            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const direction = event.deltaY > 0 ? 'down' : 'up';

            if (direction === 'down' && currentSectionIndex < sectionRefs.length - 1) {
                setCurrentSectionIndex(prevIndex => prevIndex + 1);
                sectionRefs[currentSectionIndex + 1].current?.scrollIntoView({ behavior: 'smooth' });
            } else if (direction === 'up' && currentSectionIndex > 0) {
                setCurrentSectionIndex(prevIndex => prevIndex - 1);
                sectionRefs[currentSectionIndex - 1].current?.scrollIntoView({ behavior: 'smooth' });
            }

            setTimeout(() => {
                isThrottled = false;
            }, 1000);
        };

        const debouncedOnScroll = debounce(onScroll, 200);

        window.addEventListener('wheel', debouncedOnScroll);

        return () => {
            window.removeEventListener('wheel', debouncedOnScroll);
        };
    }, [currentSectionIndex, sectionRefs]);

    const handleArrowClick = () => {
        if (currentSectionIndex < sectionRefs.length - 1) {
            setCurrentSectionIndex(prevIndex => prevIndex + 1);
            sectionRefs[currentSectionIndex + 1].current?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='wow fadeInDown' data-wow-duration='1.5s'>
            <div className="background">
                <div className="overlay"></div>
                <div className="centered-text">
                    <h1>MAKE THE HISTORY</h1>
                </div>
                <div className="bottom-text">
                    <ArrowDownwardIcon
                        className='arrow'
                        style={{ fontSize: '30px', border: '1px solid #000', borderRadius: '50%', padding: '2px' }}
                        onClick={handleArrowClick}
                    />
                </div>
            </div>

            <div ref={headerRef} id='FirstSection'>
                <FirstSection />
            </div>
            <div ref={secondSectionRef} id='SecondSection'>
                <SecondSection />
            </div>
            <div ref={thirdSectionRef} id='ThirdSection'>
                <ThirdSection />
            </div>
            <div ref={fourthSectionRef} id='FourthSection'>
                <FourthSection />
            </div>
        </div>
    );
};
 * 
 * 
 */