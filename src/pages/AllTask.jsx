import React from 'react';
import { useLoaderData } from 'react-router';
import TaskCard from '../components/TaskCard';

const AllTask = () => {
    const allTask = useLoaderData();
    return (
        <div className='max-w-7/10 mx-auto grid grid-cols-3 gap-6 my-32'>
            {
                allTask.map(task => <TaskCard key={task._id} task={task}></TaskCard>)
            }
        </div>
    );
};

export default AllTask;