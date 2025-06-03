import React from 'react';

const AddTask = () => {
    const handleAddTask = e => {
        e.preventDefault();
        const form = e.target;
        const formData = Object.fromEntries(new FormData (form))
        console.log(formData);
    }
    return (
        <div>
            <form onSubmit={handleAddTask} className='space-y-5'>
                <div className='flex flex-col gap-2'>
                    <label for='title'>Task Title</label>
                    <input id='title' name='title' placeholder='Enter your title' type="text" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label for='category'>Category</label>
                    <select id='category' name='category' placeholder='Select Category'>
                        <option value="-- select Category --">-- select Category --</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Graphics Design">Graphics Design</option>
                        <option value="Content Writing">Content Writing</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <label for="description">Description</label>
                    <input id="description" name="description" placeholder='Enter task description' type="text" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label for="deadline">Deadline</label>
                    <input id="deadline" name="deadline" type="date" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label for="budget">Budget</label>
                    <input id="budget" name="budget" type="text" placeholder='Enter budget'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label for="email">User Email</label>
                    <input readOnly id="email" name="email" type="text"/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label for="username">Username</label>
                    <input readOnly id="username" name="username" type="text"/>
                </div>
                <div>
                    <input type="submit" value="Add Task" />
                </div>
            </form>
        </div>
    );
};

export default AddTask;