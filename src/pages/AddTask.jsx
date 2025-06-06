import React, { use } from "react";
import { AuthContext } from "../provider/AuthContext";
import Swal from "sweetalert2";

const AddTask = () => {
  const { user } = use(AuthContext);

  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const taskData = Object.fromEntries(new FormData(form));
    console.log(taskData);

    //post task data

    fetch("http://localhost:5000/all-task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(taskData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "A new Task added!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="w-xl mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-5 text-center">Add your Task</h2>
      <form onSubmit={handleAddTask} className="space-y-3">
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium" for="title">
            Task Title
          </label>
          <input
            id="title"
            name="title"
            placeholder="Enter your title"
            type="text"
            className="border p-3 border-gray-400 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium" for="category">
            Category
          </label>
          <select
            className="border p-3 border-gray-400 rounded-lg"
            id="category"
            name="category"
            placeholder="Select Category"
          >
            <option disabled selected value="">
              Choose Category
            </option>
            <option value="Web Development">Web Development</option>
            <option value="Graphics Design">Graphics Design</option>
            <option value="Content Writing">Content Writing</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="seo">SEO</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium" for="description">
            Description
          </label>
          <input
            className="border p-3 border-gray-400 rounded-lg"
            id="description"
            name="description"
            placeholder="Enter task description"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium" for="deadline">
            Deadline
          </label>
          <input
            className="border p-3 border-gray-400 rounded-lg"
            id="deadline"
            name="deadline"
            type="date"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium" for="budget">
            Budget
          </label>
          <input
            className="border p-3 border-gray-400 rounded-lg"
            id="budget"
            name="budget"
            type="text"
            placeholder="Enter budget"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium" for="email">
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
          <label className="text-lg font-medium" for="username">
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
        {/* Active / Inactive Status hidden Data */}
        <div>
          <input type="checkbox" className="toggle toggle-info hidden" defaultChecked name="status" />
        </div>
        <div>
          <input
            type="submit"
            value="Add Task"
            className="bg-blue-500 w-full p-2 text-white font-semibold"
          />
        </div>
      </form>
    </div>
  );
};

export default AddTask;
