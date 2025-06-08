import React from 'react';
import { CiChat1 } from 'react-icons/ci';
import { FaRegStar } from 'react-icons/fa';
import { IoCardOutline } from 'react-icons/io5';
import { MdOutlineLocationSearching } from 'react-icons/md';

const HowItWorks = () => {
    return (
        <div className='max-w-10/12 mx-auto text-center py-14 space-y-5'>
            <h2 className='text-4xl font-bold'>How Task Market Works</h2>
            <p className='text-xl max-w-[700px] mx-auto text-[#4b5563]'>Getting started is simple. Whether you're hiring or freelancing, our platform makes it easy to connect, collaborate, and succeed.</p>
            <div className='flex flex-col md:flex-row gap-5 mt-14'>
                <div className='flex flex-col gap-4 items-center flex-1'>
                    <p className='w-[50px] h-[50px] bg-blue-600 rounded-full text-xl font-semibold text-white flex justify-center items-center'>1</p>
                    <MdOutlineLocationSearching size='45px' color='#155DFC'/>
                    <h2 className='text-lg font-bold'>Find the Perfect Match</h2>
                    <p className='max-w-[700px] mx-auto text-[#4b5563]'>Browse through thousands of projects or post your own task. Our smart matching system connects clients with the right freelancers based on skills, experience, and budget.</p>
                </div>
                <div className='flex flex-col gap-4 items-center flex-1'>
                    <p className='w-[50px] h-[50px] bg-blue-600 rounded-full text-xl font-semibold text-white flex justify-center items-center'>2</p>
                    <CiChat1 size='45px' color='#155DFC'/>
                    <h2 className='text-lg font-bold'>Connect & Collaborate</h2>
                    <p className='max-w-[700px] mx-auto text-[#4b5563]'>Communicate directly with potential matches through our secure messaging system. Discuss project details, timelines, and expectations before starting work.</p>
                </div>
                <div className='flex flex-col gap-4 items-center flex-1'>
                    <p className='w-[50px] h-[50px] bg-blue-600 rounded-full text-xl font-semibold text-white flex justify-center items-center'>3</p>
                    <IoCardOutline  size='45px' color='#155DFC'/>
                    <h2 className='text-lg font-bold'>Secure Payment</h2>
                    <p className='max-w-[700px] mx-auto text-[#4b5563]'>Our escrow system ensures safe transactions for both parties. Payments are held securely and released upon project completion and client approval.</p>
                </div>
                <div className='flex flex-col gap-4 items-center flex-1'>
                    <p className='w-[50px] h-[50px] bg-blue-600 rounded-full text-xl font-semibold text-white flex justify-center items-center'>4</p>
                    <FaRegStar size='45px' color='#155DFC'/>
                    <h2 className='text-lg font-bold'>Build Your Reputation</h2>
                    <p className='max-w-[700px] mx-auto text-[#4b5563]'>Leave reviews and build long-term professional relationships. Our rating system helps both clients and freelancers establish credibility and find quality partners.</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;