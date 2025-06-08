import React from 'react';
import Banner from '../components/Banner';
import FeaturedTask from '../components/FeaturedTask';
import HowItWorks from '../components/HowItWorks';
import TopCategories from '../components/TopCategories';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <FeaturedTask></FeaturedTask>
            <HowItWorks/>
            <TopCategories/>
        </>
    );
};

export default Home;