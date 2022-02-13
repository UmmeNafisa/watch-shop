import React from 'react';
import Banner from '../Banner/Banner';
import DialClock from '../DialClock/DialClock';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import VerityItems from '../VarietyItems/VerityItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProduct></FeaturedProduct>
            <VerityItems></VerityItems>
            <DialClock></DialClock>
        </div>
    );
};

export default Home;