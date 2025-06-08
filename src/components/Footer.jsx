import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#111827] py-10">
      <div className="container mx-auto flex gap-6">
        <div className="space-y-4 text-gray-300 flex-1">
          <Link to="/" className="text-xl font-bold">
            <h2>Task Market</h2>
          </Link>
          <p className="mt-4">
            The premier platform connecting talented freelancers with clients
            seeking quality work. Find your next project or hire the perfect
            freelancer today.
          </p>
          <div className="flex gap-3">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-lg text-white font-semibold mb-5">Quick Links</h2>
          <ul className="text-gray-300 space-y-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-task">Add Task</Link>
            </li>
            <li>
              <Link to="/all-task">Browse Task</Link>
            </li>
            <li>
              <Link to="/my-task">My Task</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-lg text-white font-semibold mb-5">Legal</h2>
          <ul className="text-gray-300 space-y-4">
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/cookie-policy">Cookie Policy</Link>
            </li>
            <li>
              <Link to="/dispute">Dispute Resolution</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-lg text-white font-semibold mb-5">Legal</h2>
          <ul className="text-gray-300 space-y-4">
            <li className="flex gap-2 items-center">
              <span><FaRegEnvelope size={'20px'}/></span>
              <span>support@taskmarket.com</span>
            </li>
            <li className="flex gap-2 items-center">
              <span><FaPhoneAlt  size={'20px'}/></span>
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex gap-2 items-center">
              <span><FaMapMarkerAlt  size={'20px'}/></span>
              <span>support@taskmarket.com</span>
            </li>
          </ul>
        </div>
        
      </div>
      <div className="container mx-auto flex justify-between gap-6 mt-10 pt-10 border-t border-gray-700 text-gray-500">
        <p>© 2025 TaskMarket. All rights reserved.</p>
        <p>Built with passion for freelancers worldwide</p>
      </div>
    </div>
  );
};

export default Footer;
