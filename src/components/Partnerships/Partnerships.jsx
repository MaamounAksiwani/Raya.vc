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
    useEffect(() => {
        document.title = "Partner-ships | Raya ";
        return () => {
          document.title = "";
        };
      }, []);

    return (
        <div className='partnershipsPage wow fadeInDown' data-wow-duration='1.5s'>

            <div className='container-partnerships'>
                <h1>HISTORY IN THE MAKING</h1>

                <div className='grid-image'>
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/b1bdcf266db55bd103018f26f38fc3528dd874d2-256x77.png?w=220&fm=png' alt='h' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/a18784e25e6b06963e53d7f3293b1491efb4ef33-547x548.svg?w=220&fm=png' alt='nnn' />

                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/5f92d18043ff3542c094d59e666caf8769df0525-256x70.png?w=220&fm=png' alt='../'/>

                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/c2ac1f795ae37ddb64db511947ca36cff4f1eb6b-256x116.png?w=220&fm=png' alt='.'/>

                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/17f579fe39f283fea8c723efc770b0da7ee3d708-320x156.png?w=220&fm=png' alt='nnn' />
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/43dd312e4d482e3917ef0d9556ff7fea0b1761e3-256x153.png?w=220&fm=png' alt='//'/>
                    
                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/bd80ff1221e1e75f6ab1707f51ab02ab9b6b3110-256x192.png?w=220&fm=png' alt='nnn' />

                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/504672b3874309887601c29b0ba85de3022db11b-256x192.png?w=220&fm=png' alt='./' />

                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/678054ab8495f291cf8753ce08180be73b45d43a-256x192.png?w=220&fm=png' alt='//'/>


                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/b3e9ad84e3f67554c67c8b7f8dcc62969ae3c5c3-256x192.png?w=220&fm=png' alt='./'/>


                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/4e17d5c71c425fe0e5cb3ee95bc686d90a77dc3b-256x192.png?w=220&fm=png' alt='./' />


                    <img src='https://cdn.sanity.io/images/ti7si9cx/production/1ce60338692b8111cfca20fcd5c6c303aab6d4de-512x384.svg?w=220&fm=png' alt='./'/>


                </div>


            </div>


        </div>

    );
}

export default Partnerships;