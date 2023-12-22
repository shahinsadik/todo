// Navbar.js
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaUserPlus, FaUsers } from "react-icons/fa";
import useAuth from "./../../Hooks/useAuth";
import { FaList } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="fixed z-10 w-full">
      <div className="">
        <div className="navbar bg-gray-400 drop-shadow-2xl  ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#6c63ff] rounded-box lg:w-52">
                <li>
                  <NavLink to="/">
                    <FaHome /> Home
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link to="/" className="ml-5 normal-case text-2xl text-white">
              <span className="text-[#ff3c00] font-black">A</span>M
              <span className="text-green-800 font-black">S</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ">
              <li>
                <NavLink to="/" activeClassName="active">
                  <FaHome /> Home
                </NavLink>
              </li>
              {user ? (
                <>
                <li>
                <NavLink to="/dashboard/AddTask" activeClassName="active">
                  <FaUserPlus /> Add Task
                </NavLink>
              </li>
                <li>
                <NavLink to="/dashboard/AllTasks" activeClassName="active">
                  <FaList /> All Tasks
                </NavLink>
              </li>
                <li>
                <NavLink to="/dashboard/PrevTasks" activeClassName="active">
                  <FaEnvelope /> Previous Tasks
                </NavLink>
              </li>
              </>
              ) : (
                <>
                  <li>
                    <NavLink to="/register" activeClassName="active">
                      <FaUserPlus /> Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" activeClassName="active">
                      <FaUsers /> Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="navbar-end ">
            <>
              {user ? (
                <div className="dropdown dropdown-end ">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar bg-white">
                    <div className="w-10 rounded-full">
                      <img
                        src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/dee97162-41b2-4e11-1d58-1d86f8ac3a00/preview"
                        alt="user-avatar"
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box lg:w-52">
                    <li>
                      <a className="font-semibold">Name: {user?.displayName}</a>
                    </li>
                    <li>
                      <a className="font-semibold">Dashboard</a>
                    </li>
                    <li>
                      <a className="font-semibold">Edit Profile</a>
                    </li>
                    <a
                      onClick={handleLogOut}
                      className="btn mt-1 btn-md font-bold text-white hover:text-[#ff3c00] border-none bg-[#ff3c00]">
                      {" "}
                      Log Out
                    </a>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
