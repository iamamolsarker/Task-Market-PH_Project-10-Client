import React, { use } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const EditTask = () => {
  const {user} = use(AuthContext);
  const {_id, title, category, description, deadline, budget, status} = useLoaderData()

    const handleEditTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedTaskData = Object.fromEntries(new FormData(form));
        console.log(updatedTaskData);

        fetch(`http://localhost:5000/all-task/${_id}`, {
          method: 'PUT',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(updatedTaskData)
        })
        .then(res => res.json())
        .then(data => {
          if(data.modifiedCount){
            Swal.fire({
              title: "Task Updated Successfully!",
              icon: "success",
          });
          }
        })
        
    }
    return (
        <div className="w-xl mx-auto py-10">
          <h2 className="text-3xl font-semibold mb-5 text-center">Edit your Task</h2>
          <form onSubmit={handleEditTask} className="space-y-3">
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium">
                Task Title
              </label>
              <input
                id="title"
                name="title"
                defaultValue={title}
                placeholder="Enter your title"
                type="text"
                className="border p-3 border-gray-400 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium" >
                Category
              </label>
              <select
                className="border p-3 border-gray-400 rounded-lg"
                id="category"
                name="category"
                defaultValue={category}
                placeholder="Select Category"
              >
                <option disabled value="">
                  Choose Category
                </option>
                <option value="Web Development">Web Development</option>
                <option value="Graphics Design">Graphics Design</option>
                <option value="Content Writing">Content Writing</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="seo">SEO</option>
                <option value="video & animation">Video & Animation</option>
                <option value="sales & marketing">Sales & Marketing</option>
                <option value="Data Science">Data Science</option>
                <option value="Translation">Translation</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium" >
                Description
              </label>
              <input
                className="border p-3 border-gray-400 rounded-lg"
                id="description"
                name="description"
                defaultValue={description}
                placeholder="Enter task description"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium" >
                Deadline
              </label>
              <input
                className="border p-3 border-gray-400 rounded-lg"
                id="deadline"
                name="deadline"
                defaultValue={deadline}
                type="date"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium" >
                Budget
              </label>
              <input
                className="border p-3 border-gray-400 rounded-lg"
                id="budget"
                name="budget"
                defaultValue={budget}
                type="text"
                placeholder="Enter budget"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium" >
                Availability
              </label>
              <select className="border p-3 border-gray-400 rounded-lg" defaultValue={status} name="status">
                <option value="available">Available</option>
                <option value="not available" >Not Available</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium" >
                User Email
              </label>
              <input
                className="cursor-not-allowed border p-3 border-gray-400 rounded-lg opacity-60"
                readOnly
                id="email"
                name="email"
                defaultValue={user.email}
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium" >
                Username
              </label>
              <input
                className="cursor-not-allowed border p-3 border-gray-400 rounded-lg opacity-60"
                readOnly
                id="username"
                name="username"
                defaultValue={user.displayName}
                type="text"
              />
            </div>            
            <div>
              <input
                type="submit"
                value="Update Task"
                className="bg-blue-500 w-full p-2 text-white font-semibold"
              />
            </div>
          </form>
        </div>
    );
};

export default EditTask;