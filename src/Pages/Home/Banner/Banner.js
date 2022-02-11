import { Box, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Banner.css'


const Banner = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000);
    }, []);
    return (
        <div className='banner-bg'>
            <Box className='banner-box'>
                <h1 className="date-time"> {time.toLocaleString()} </h1>
                <h5 className="empire"> EMPIRE COLLECTION</h5>
                <h1 className="banner-header header-font">
                    The Watch Everyone desires
                </h1>
                <p className='des-p'> the best in class elegant watches from the luxury brand swiss eagle high-quality watches into which a lot of care has gone in. </p>
                <div id="btn"><span class="noselect">BUY NOW</span><div id="circle"></div></div>
            </Box>
        </div >
    );
};

export default Banner;