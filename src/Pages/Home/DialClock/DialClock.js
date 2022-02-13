import { Container, Typography } from '@material-ui/core';
import React, { useRef } from 'react';
import { Rerousel } from 'rerousel';
import "./DialClock.css"

const DialClock = () => {
    const customerLogo = useRef(null);
    let customers = [
        {
            image: 'https://i.ibb.co/6PtwVtv/client-1.png'
        },
        {
            image: 'https://i.ibb.co/dWzhq8J/client-2.png'
        },
        {
            image: 'https://i.ibb.co/HppBjqm/client-3.png'
        },
        {
            image: 'https://i.ibb.co/qxCq8f9/client-4.png'
        },
        {
            image: 'https://i.ibb.co/ggpSxvs/client-5.png'
        },
        {
            image: 'https://i.ibb.co/DWVSh3K/client-6.png'
        }
    ]
    return (
        <div className='dial-clock-container'>
            <Container>
                <Typography variant="subtitle1" className='feature-collection'>A VARIETY OF 300+ COLLECTION</Typography>
                <Typography variant="h2" component="h2" className='feature-product dial-header' > <span className='feature'>CHOOSE A </span> DIAL</Typography>
                <Rerousel itemRef={customerLogo}>
                    {customers.map((c) => {
                        return <img key={c.image} src={c.image} ref={customerLogo} alt="dial-watch" className='dials' />;
                    })}
                </Rerousel>
            </Container>
        </div>
    );
};

export default DialClock;

