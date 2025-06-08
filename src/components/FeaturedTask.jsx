import React from "react";
import TaskCard from "./TaskCard";

const FeaturedTask = ({ featuredData }) => {
  return (
    <>
      <div className="max-w-10/12 mx-auto text-center py-14 space-y-5">
        <h2 className="text-4xl font-bold">Featured Task</h2>
        <p className="text-xl max-w-[700px] mx-auto text-[#4b5563]">
          Discover high-quality projects from verified clients. Find the perfect
          task that matches your skills and start earning today.
        </p>
      </div>
      <div className="max-w-7/10 mx-auto grid grid-cols-3 gap-6">
        {featuredData.map((task) => (
          <TaskCard key={task._id} task={task}></TaskCard>
        ))}
      </div>
    </>
  );
};

export default FeaturedTask;
