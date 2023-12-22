import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaUsers,
  FaListOl,
  FaUserPlus,
  FaUserEdit,
} from "react-icons/fa";


import useAuth from "./../../Hooks/useAuth";

const Dashboard = () => {
  const Links =<>
  <li>
    <NavLink to="/">
      <FaHome></FaHome> Home
    </NavLink>
  </li>
  <li>
    <NavLink to="/dashboard/AddTask">
      <FaUserPlus></FaUserPlus> Add Task
    </NavLink>
  </li>
  <li>
    <NavLink to="/dashboard/AllTasks">
      <FaList> </FaList> Add Task
    </NavLink>
  </li>
  <li>
    <NavLink to="/dashboard/PrevTask">
      <FaUserEdit></FaUserEdit> Pervious Task
    </NavLink>
  </li>

  
</>
  const { logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  

  return (
    <div>
      <div className="flex">
      <div className="w-64 min-h-screen bg-[#fb923c] bg-opacity-50">
        <ul className="menu">
          {Links}
           
         
          <a
            onClick={handleLogOut}
            className="btn mt-1 btn-md font-bold text-white hover:text-[#ff3c00] border-none bg-[#ff3c00]">
            {" "}
            Log Out
          </a>
        </ul>
      </div>
      <div className="flex-1 ">
        <Outlet></Outlet>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
