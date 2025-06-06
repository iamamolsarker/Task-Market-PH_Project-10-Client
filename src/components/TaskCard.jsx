import React from 'react';
import { CiBadgeDollar, CiCalendar, CiUser, CiLocationOn, CiEdit, CiCircleRemove  } from 'react-icons/ci';
import { MdRadioButtonChecked } from 'react-icons/md';

const TaskCard = ({task}) => {
    const {title, category, description, deadline, budget, username,} = task;
    return (
        <div>
            <div className='p-6 border border-gray-200 rounded-xl shadow-md flex flex-col gap-6 justify-between'>
            <div className='space-y-5'>
                <div className='flex justify-between items-center'>
                    <p className='text-sm font-medium text-[#1d4ed8] py-1 px-2 bg-blue-100 inline rounded'>{category}</p>
                    <div className='flex gap-2'>
                        <button className='border border-gray-300 p-2 rounded-lg cursor-pointer'><CiEdit size={20}/></button>
                        <button className='border border-[#ff00001a] p-2 rounded-lg cursor-pointer bg-[#ff00001a]'><CiCircleRemove size={20} color='#ef4444'/></button>
                    </div>
                </div>
                <h2 className='text-lg text-[#111827] font-medium mt-5'>{title}</h2>
                <p className='text-[#4b5563]'>{description}</p>
                <div className='space-y-1.5'>
                    <p className='flex gap-1 items-center font-medium text-[#303944]'><span><CiBadgeDollar size={'20px'} color='#22c55e'/></span> ${budget}</p>
                    <p className='flex gap-1 items-center text-[#303944]'><span><CiCalendar size={'20px'} color='#3b82f6'/></span> {deadline}</p>
                    <p className='flex gap-1 items-center text-[#303944]'><span><CiUser size={'20px'} color='#a855f7'/></span> {username}</p>
                    <p className='flex gap-1 items-center text-[#303944]'><span><CiLocationOn size={'20px'} color='#ef4444'/></span> Remote</p>
                </div>
            </div>
            <div className='py-3 flex justify-between border-t border-gray-200'>
                <p>9 bids</p>
                <p>{task.status ? <span className='flex items-center gap-1'><MdRadioButtonChecked color='#17e349'/> Available</span> : <span className='flex items-center gap-1'><MdRadioButtonChecked color='#ef4444'/> Not Available</span>}</p>
            </div>
        </div>
        </div>
    );
};

export default TaskCard;