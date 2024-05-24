import React, { useEffect } from 'react';
import './Partnerships.css';
import WOW from 'wowjs';
import { Container } from '@mui/material';

const Partnerships = () => {
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className='partnershipsPage wow fadeInDown' data-wow-duration='1.5s'>

            <div className='container-partnerships'>
                <h1>HISTORY IN THE MAKING</h1>

                <div className='grid-image'>
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/b1bdcf266db55bd103018f26f38fc3528dd874d2-256x77.png?w=220&fm=png' alt='h' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/a18784e25e6b06963e53d7f3293b1491efb4ef33-547x548.svg?w=220&fm=png' alt='nnn' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/bd80ff1221e1e75f6ab1707f51ab02ab9b6b3110-256x192.png?w=220&fm=png' alt='nnn' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/17f579fe39f283fea8c723efc770b0da7ee3d708-320x156.png?w=220&fm=png' alt='nnn' />
                    {/* <img src='https://cdn.sanity.io/images/ti7si9cx/production/264b939b9c84c2cef7c35a775b2b5ac478fc258b-256x72.png?w=220&fm=png' alt='nnn' />
                    
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/b1bdcf266db55bd103018f26f38fc3528dd874d2-256x77.png?w=220&fm=png' alt='h' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/a18784e25e6b06963e53d7f3293b1491efb4ef33-547x548.svg?w=220&fm=png' alt='nnn' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/bd80ff1221e1e75f6ab1707f51ab02ab9b6b3110-256x192.png?w=220&fm=png' alt='nnn' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/17f579fe39f283fea8c723efc770b0da7ee3d708-320x156.png?w=220&fm=png' alt='nnn' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/264b939b9c84c2cef7c35a775b2b5ac478fc258b-256x72.png?w=220&fm=png' alt='nnn' />
                    
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/b1bdcf266db55bd103018f26f38fc3528dd874d2-256x77.png?w=220&fm=png' alt='h' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/a18784e25e6b06963e53d7f3293b1491efb4ef33-547x548.svg?w=220&fm=png' alt='nnn' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/bd80ff1221e1e75f6ab1707f51ab02ab9b6b3110-256x192.png?w=220&fm=png' alt='nnn' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/17f579fe39f283fea8c723efc770b0da7ee3d708-320x156.png?w=220&fm=png' alt='nnn' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/264b939b9c84c2cef7c35a775b2b5ac478fc258b-256x72.png?w=220&fm=png' alt='nnn' />
                    
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/b1bdcf266db55bd103018f26f38fc3528dd874d2-256x77.png?w=220&fm=png' alt='h' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/a18784e25e6b06963e53d7f3293b1491efb4ef33-547x548.svg?w=220&fm=png' alt='nnn' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/bd80ff1221e1e75f6ab1707f51ab02ab9b6b3110-256x192.png?w=220&fm=png' alt='nnn' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/17f579fe39f283fea8c723efc770b0da7ee3d708-320x156.png?w=220&fm=png' alt='nnn' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/264b939b9c84c2cef7c35a775b2b5ac478fc258b-256x72.png?w=220&fm=png' alt='nnn' />
                    
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/b1bdcf266db55bd103018f26f38fc3528dd874d2-256x77.png?w=220&fm=png' alt='h' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/a18784e25e6b06963e53d7f3293b1491efb4ef33-547x548.svg?w=220&fm=png' alt='nnn' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/bd80ff1221e1e75f6ab1707f51ab02ab9b6b3110-256x192.png?w=220&fm=png' alt='nnn' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/17f579fe39f283fea8c723efc770b0da7ee3d708-320x156.png?w=220&fm=png' alt='nnn' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/264b939b9c84c2cef7c35a775b2b5ac478fc258b-256x72.png?w=220&fm=png' alt='nnn' />
                    
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/b1bdcf266db55bd103018f26f38fc3528dd874d2-256x77.png?w=220&fm=png' alt='h' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/a18784e25e6b06963e53d7f3293b1491efb4ef33-547x548.svg?w=220&fm=png' alt='nnn' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/bd80ff1221e1e75f6ab1707f51ab02ab9b6b3110-256x192.png?w=220&fm=png' alt='nnn' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/17f579fe39f283fea8c723efc770b0da7ee3d708-320x156.png?w=220&fm=png' alt='nnn' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/264b939b9c84c2cef7c35a775b2b5ac478fc258b-256x72.png?w=220&fm=png' alt='nnn' />
                    
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/b1bdcf266db55bd103018f26f38fc3528dd874d2-256x77.png?w=220&fm=png' alt='h' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/a18784e25e6b06963e53d7f3293b1491efb4ef33-547x548.svg?w=220&fm=png' alt='nnn' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/bd80ff1221e1e75f6ab1707f51ab02ab9b6b3110-256x192.png?w=220&fm=png' alt='nnn' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/17f579fe39f283fea8c723efc770b0da7ee3d708-320x156.png?w=220&fm=png' alt='nnn' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/264b939b9c84c2cef7c35a775b2b5ac478fc258b-256x72.png?w=220&fm=png' alt='nnn' /> */}
                </div>


            </div>


        </div>

    );
}

export default Partnerships;