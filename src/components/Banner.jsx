import React from 'react';
import BannerBg from '../assets/banner-bg.webp'

const Banner = () => {
    return (
        <div className='min-h-[75vh] flex flex-col items-center justify-center' style={{backgroundImage: `url(${BannerBg})`}}>
            <div className='max-w-10/12 mx-auto text-center space-y-5'>
                <h2 className='text-7xl font-semibold'>Earn Money with Your Skills</h2>
                <p className = 'text-2xl font-medium'>Turn your expertise into income with flexible freelance opportunities</p>
                <p className='text-xl max-w-[700px] mx-auto text-[#4b5563]'>Whether you're a developer, designer, writer, or marketer, find high-paying projects that match your skills and schedule. Start earning today.</p>
                <button className='px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg'>Start Freelancing</button>
            </div>
        </div>
    );
};

export default Banner;