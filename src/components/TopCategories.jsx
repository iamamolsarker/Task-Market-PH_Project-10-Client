import React from "react";
import { BsMegaphone } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { GoDatabase } from "react-icons/go";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoMdCamera, IoMdTrendingUp } from "react-icons/io";
import { IoCodeSlashOutline } from "react-icons/io5";
import { LuPenTool } from "react-icons/lu";
import { MdOutlineColorLens } from "react-icons/md";

const TopCategories = () => {
  return (
    <div className="max-w-10/12 mx-auto text-center py-14 space-y-5">
      <h2 className="text-4xl font-bold">Top Categories</h2>
      <p className="text-xl max-w-[700px] mx-auto text-[#4b5563]">
        Explore our most popular skill categories and find the perfect freelancer for your project needs.
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6 border border-gray-200 shadow-md p-4 rounded-xl">
            <div className="flex gap-4">
                <div className="bg-[#3B82F6] w-[50px] h-[50px] text-white flex justify-center items-center rounded-lg">
                    <IoCodeSlashOutline size={'35px'}/>
                </div>
                <div className="text-left">
                    <h2 className='text-lg font-bold'>Web Development</h2>
                    <p className='text-[#4b5563]'>Frontend, Backend, Full-stack</p>
                </div>
            </div>
            <div className="flex justify-between">
                <p className='text-sm text-[#86888c]'>1,250 jobs available</p>
                <button className="text-blue-500 flex items-center gap-2">Explore <HiArrowLongRight /></button>
            </div>
        </div>
        <div className="flex flex-col gap-6 border border-gray-200 shadow-md p-4 rounded-xl">
            <div className="flex gap-4">
                <div className="bg-[#A855F7] w-[50px] h-[50px] text-white flex justify-center items-center rounded-lg">
                    <MdOutlineColorLens size={'35px'}/>
                </div>
                <div className="text-left">
                    <h2 className='text-lg font-bold'>Graphic Design</h2>
                    <p className='text-[#4b5563]'>Logos, Branding, Print Design</p>
                </div>
            </div>
            <div className="flex justify-between">
                <p className='text-sm text-[#86888c]'>980 jobs available</p>
                <button className="text-blue-500 flex items-center gap-2">Explore <HiArrowLongRight /></button>
            </div>
        </div>
        <div className="flex flex-col gap-6 border border-gray-200 shadow-md p-4 rounded-xl">
            <div className="flex gap-4">
                <div className="bg-[#22C55E] w-[50px] h-[50px] text-white flex justify-center items-center rounded-lg">
                    <LuPenTool size={'35px'}/>
                </div>
                <div className="text-left">
                    <h2 className='text-lg font-bold'>Writing & Content</h2>
                    <p className='text-[#4b5563]'>Blog Writing, Copywriting, SEO</p>
                </div>
            </div>
            <div className="flex justify-between">
                <p className='text-sm text-[#86888c]'>780 jobs available</p>
                <button className="text-blue-500 flex items-center gap-2">Explore <HiArrowLongRight /></button>
            </div>
        </div>
        <div className="flex flex-col gap-6 border border-gray-200 shadow-md p-4 rounded-xl">
            <div className="flex gap-4">
                <div className="bg-[#F97316] w-[50px] h-[50px] text-white flex justify-center items-center rounded-lg">
                    <IoMdTrendingUp size={'35px'}/>
                </div>
                <div className="text-left">
                    <h2 className='text-lg font-bold'>Digital Marketing</h2>
                    <p className='text-[#4b5563]'>SEO, SEM, Social Media</p>
                </div>
            </div>
            <div className="flex justify-between">
                <p className='text-sm text-[#86888c]'>620 jobs available</p>
                <button className="text-blue-500 flex items-center gap-2">Explore <HiArrowLongRight /></button>
            </div>
        </div>
        <div className="flex flex-col gap-6 border border-gray-200 shadow-md p-4 rounded-xl">
            <div className="flex gap-4">
                <div className="bg-[#EF4444] w-[50px] h-[50px] text-white flex justify-center items-center rounded-lg">
                    <IoMdCamera size={'35px'}/>
                </div>
                <div className="text-left">
                    <h2 className='text-lg font-bold'>Video & Animation</h2>
                    <p className='text-[#4b5563]'>Video Editing, Motion Graphics</p>
                </div>
            </div>
            <div className="flex justify-between">
                <p className='text-sm text-[#86888c]'>440 jobs available</p>
                <button className="text-blue-500 flex items-center gap-2">Explore <HiArrowLongRight /></button>
            </div>
        </div>
        <div className="flex flex-col gap-6 border border-gray-200 shadow-md p-4 rounded-xl">
            <div className="flex gap-4">
                <div className="bg-[#EC4899] w-[50px] h-[50px] text-white flex justify-center items-center rounded-lg">
                    <BsMegaphone Camera size={'35px'}/>
                </div>
                <div className="text-left">
                    <h2 className='text-lg font-bold'>Sales & Marketing</h2>
                    <p className='text-[#4b5563]'>Lead Generation, Email Marketing</p>
                </div>
            </div>
            <div className="flex justify-between">
                <p className='text-sm text-[#86888c]'>340 jobs available</p>
                <button className="text-blue-500 flex items-center gap-2">Explore <HiArrowLongRight /></button>
            </div>
        </div>
        <div className="flex flex-col gap-6 border border-gray-200 shadow-md p-4 rounded-xl">
            <div className="flex gap-4">
                <div className="bg-[#6366F1] w-[50px] h-[50px] text-white flex justify-center items-center rounded-lg">
                    <GoDatabase Camera size={'35px'}/>
                </div>
                <div className="text-left">
                    <h2 className='text-lg font-bold'>Data Science</h2>
                    <p className='text-[#4b5563]'>Analysis, Visualization, ML</p>
                </div>
            </div>
            <div className="flex justify-between">
                <p className='text-sm text-[#86888c]'>290 jobs available</p>
                <button className="text-blue-500 flex items-center gap-2">Explore <HiArrowLongRight /></button>
            </div>
        </div>
        <div className="flex flex-col gap-6 border border-gray-200 shadow-md p-4 rounded-xl">
            <div className="flex gap-4">
                <div className="bg-[#14B8A6] w-[50px] h-[50px] text-white flex justify-center items-center rounded-lg">
                    <CiGlobe Camera size={'35px'}/>
                </div>
                <div className="text-left">
                    <h2 className='text-lg font-bold'>Translation</h2>
                    <p className='text-[#4b5563]'>Document, Website Translation</p>
                </div>
            </div>
            <div className="flex justify-between">
                <p className='text-sm text-[#86888c]'>240 jobs available</p>
                <button className="text-blue-500 flex items-center gap-2">Explore <HiArrowLongRight /></button>
            </div>
        </div>
      </div>
      <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg mt-5">View All Categories</button>
    </div>
  );
};

export default TopCategories;
