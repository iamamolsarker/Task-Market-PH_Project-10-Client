import React from 'react';
import { CiBadgeDollar, CiCalendar, CiUser, CiLocationOn } from 'react-icons/ci';
import { MdRadioButtonChecked } from 'react-icons/md';
import { Link } from 'react-router';

const TaskCard = ({task}) => {
    const {title, category, description, deadline, budget, username, status} = task;
    return (
        <>
            <div className='p-6 border border-gray-200 rounded-xl shadow-md flex flex-col gap-6 justify-between'>
            <div className='space-y-5'>
                <p className='text-sm font-medium text-[#1d4ed8] py-1 px-2 bg-blue-100 inline rounded'>{category}</p>
                <h2 className='text-lg text-[#111827] font-medium mt-5'>{title}</h2>
                <p className='text-[#4b5563]'>{description}</p>
                <div className='space-y-1.5'>
                    <p className='flex gap-1 items-center font-medium text-[#303944]'><span><CiBadgeDollar size={'20px'} color='#22c55e'/></span> ${budget}</p>
                    <p className='flex gap-1 items-center text-[#303944]'><span><CiCalendar size={'20px'} color='#3b82f6'/></span> {deadline}</p>
                    <p className='flex gap-1 items-center text-[#303944]'><span><CiUser size={'20px'} color='#a855f7'/></span> {username}</p>
                    <p className='flex gap-1 items-center text-[#303944]'><span><CiLocationOn size={'20px'} color='#ef4444'/></span> Remote</p>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <div className='py-3 flex justify-between border-t border-gray-200'>
                    <p>9 bids</p>
                    <p>{status == 'available' ? <span className='flex items-center gap-1'><MdRadioButtonChecked color='#17e349'/> Available</span> : <span className='flex items-center gap-1'><MdRadioButtonChecked color='#ef4444'/>Not Available</span>}</p>
                </div>
                <Link to={`/task/${task._id}`} className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg text-center">Details</Link>
            </div>
        </div>
        </>
    );
};

export default TaskCard;