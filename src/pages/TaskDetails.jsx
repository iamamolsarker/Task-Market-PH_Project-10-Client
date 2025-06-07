import React from 'react';
import { CiBadgeDollar, CiCalendar, CiLocationOn, CiUser } from 'react-icons/ci';
import { useLoaderData } from 'react-router';

const TaskDetails = () => {
    const {title, description, category, budget, deadline, username} = useLoaderData();
    return (
        <div className='max-w-4/12 mx-auto my-12 space-y-5 text-center'>
            <p className='text-sm font-medium text-[#1d4ed8] py-1 px-2 bg-blue-100 inline rounded'>{category}</p>
            <h2 className='text-3xl text-[#111827] font-medium mt-5'>{title}</h2>
            <p className='text-[#4b5563]'>{description}</p>
            <div className='space-y-1.5 flex justify-center gap-10 py-4'>
                <p title='Budget' className='flex flex-col gap-1 items-center font-medium text-[#303944]'><span><CiBadgeDollar size={'30px'} color='#22c55e'/></span> ${budget}</p>
                <p title='Deadline' className='flex flex-col gap-1 font-medium items-center text-[#303944]'><span><CiCalendar size={'30px'} color='#3b82f6'/></span> {deadline}</p>
                <p title='User' className='flex flex-col gap-1 font-medium items-center text-[#303944]'><span><CiUser size={'30px'} color='#a855f7'/></span> {username}</p>
                <p className='flex flex-col gap-1 font-medium items-center text-[#303944]'><span><CiLocationOn size={'30px'} color='#ef4444'/></span> Remote</p>
            </div>
        </div>
    );
};

export default TaskDetails;