import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import { CiCircleRemove, CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
import { ImMagicWand } from "react-icons/im";
import { Link } from "react-router";

const MyTask = () => {
  const { user } = use(AuthContext);
  const [myTask, setMyTask] = useState([]);

  useEffect(() => {
    fetch(
      `https://assignment-10-task-market-server.vercel.app/my-task/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyTask(data);
      });
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-10-task-market-server.vercel.app/all-task/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingTask = myTask.filter((task) => task._id !== id);
              setMyTask(remainingTask);
            }
          });
      }
    });
  };

  return (
    <div className="max-w-8/12 mx-auto my-12 overflow-x-auto">
      {myTask.length ? (
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
            {myTask.map((task, i) => (
              <tr key={task._id} task={task}>
                <th>{i + 1}</th>
                <th>{task.title}</th>
                <th>{task.category}</th>
                <th>{task.budget}</th>
                <th>{task.deadline}</th>
                <th className="flex gap-2 items-center">
                  <button
                    title="Bids"
                    className="border border-gray-300 p-2 rounded-lg cursor-pointer"
                  >
                    <ImMagicWand size={20} />
                  </button>
                  <Link
                    to={`/edit-task/${task._id}`}
                    title="Edit"
                    className="border border-gray-300 p-2 rounded-lg cursor-pointer"
                  >
                    <CiEdit size={20} />
                  </Link>
                  <button
                    onClick={() => handleDelete(task._id)}
                    title="Delete"
                    className="border border-[#ff00001a] p-2 rounded-lg cursor-pointer bg-[#ff00001a]"
                  >
                    <CiCircleRemove size={20} color="#ef4444" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <p>No data found</p>
          <Link to='/add-task'>Add Task</Link>
          </div>
      )}
    </div>
  );
};

export default MyTask;
