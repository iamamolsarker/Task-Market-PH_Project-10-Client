import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";

const Header = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    console.log("log out initialized");
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log out successful!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const links = (
    <>
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
      <li>
        <Link to="/support">Support</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </>
  );
  console.log(user);
  return (
    <div className="navbar bg-base-100 shadow-sm max-w-7/10 mx-auto p-3 rounded-xl mt-6 -mb-[97px] z-20 sticky top-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to='/' className="text-xl font-bold">
          <h2>Task Market</h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-2 items-center justify-center">
          <img data-tooltip-id="display-name" data-tooltip-content={user.displayName} src={user.photoURL} alt="" className="w-[48px] h-[48px] border border-gray-400 rounded-full object-contain"/>
          <Tooltip className="z-50" id="display-name"/>
          <Link
            onClick={handleLogOut}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg"
          >
            Log out
          </Link>
          </div>
          
        ) : (
          <Link
            to="/login"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
