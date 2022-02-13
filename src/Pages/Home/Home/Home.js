import React from 'react';
import Banner from '../Banner/Banner';
import DialClock from '../DialClock/DialClock';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProduct></FeaturedProduct>
            <DialClock></DialClock>
        </div>
    );
};

export default Home;