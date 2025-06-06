import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthContext';
import MyTaskCard from '../components/MyTaskRow';
import { CiCircleRemove, CiEdit } from 'react-icons/ci';
import { VscEye } from 'react-icons/vsc';
import Swal from 'sweetalert2';

const MyTask = () => {

    const {user} = use(AuthContext);
    const [myTask, setMyTask] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/my-task/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setMyTask(data);
        })
    },[user.email])

    const handleDelete = (id) => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/all-task/${id}`, {
                        method: 'DELETE',
                    })
                    .then(res => res.json())
                    .then(data => {
                        if(data.deletedCount){
                            Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                    });
                    const remainingTask = myTask.filter(task => task._id !== id);
                    setMyTask(remainingTask);
                        }
                    })
                    
                }
            });
    }
    
    return (
        <div className='max-w-8/12 mx-auto my-12 overflow-x-auto'>
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                <tr>
                    <th>No.</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Budget</th>
                    <th>Deadline</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {
                        myTask.map((task, i) => 
                        <tr task={task}>
                        <th>{i+1}</th>
                        <th>{task.title}</th>
                        <th>{task.category}</th>
                        <th>{task.budget}</th>
                        <th>{task.deadline}</th>
                        <th className='flex gap-2 items-center'>
                            <button title ="View Details" className='border border-gray-300 p-2 rounded-lg cursor-pointer'><VscEye size={20}/></button>
                            <button title="Edit" className='border border-gray-300 p-2 rounded-lg cursor-pointer'><CiEdit size={20}/></button>
                            <button onClick={ ()=> handleDelete(task._id)} title="Delete" className='border border-[#ff00001a] p-2 rounded-lg cursor-pointer bg-[#ff00001a]'><CiCircleRemove size={20} color='#ef4444'/></button>
                        </th>
                    </tr>
                )
                    }
                </tbody>
            </table>
            {/* {
                myTask.map(task => <MyTaskCard key={task._id} task={task}></MyTaskCard>)
            } */}
        </div>
    );
};

export default MyTask;