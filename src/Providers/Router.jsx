import { createBrowserRouter } from "react-router-dom";
import Home from "./../Pages/Home";
import EmployeeRegister from "./../Pages/Register/EmployeeRegister";
import Login from "./../Pages/Login";
import Index from "./Index";
import Dashboard from "./../Pages/Dashboard/Dashboard";
import AddTask from "./../Pages/Task/AddTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index></Index>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <EmployeeRegister></EmployeeRegister>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "AddTask",
        element: <AddTask></AddTask>,
      },
      {
        path: "AllTasks",
        element: <Login></Login>,
      },
    ],
  },
]);
export default router;
