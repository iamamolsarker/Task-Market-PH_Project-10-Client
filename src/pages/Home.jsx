import React from 'react';
import Banner from '../components/Banner';
import FeaturedTask from '../components/FeaturedTask';
import HowItWorks from '../components/HowItWorks';
import TopCategories from '../components/TopCategories';
import { useLoaderData } from 'react-router';
import Slider from '../components/Slider';
import BlogSection from '../components/BlogSection';
import PromotionSection from '../components/PromotionSection';
import OfferSection from '../components/OfferSection';

const Home = () => {
    const featuredData = useLoaderData()
    
    return (
        <>
            <Slider/>
            <FeaturedTask featuredData={featuredData}></FeaturedTask>
            <HowItWorks/>
            <TopCategories/>
            <BlogSection/>
            <PromotionSection/>
            <OfferSection/>
        </>
    );
};

export default Home;