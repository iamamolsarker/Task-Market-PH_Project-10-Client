import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddTask from "../pages/AddTask";
import AllTask from "../pages/AllTask";
import MyTask from "../pages/MyTask";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
            path:'add-task',
            element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
        },
        {
            path: 'all-task',
            element:<AllTask></AllTask>
        },
        {
            path: 'my-task',
            element: <PrivateRoute><MyTask></MyTask></PrivateRoute>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        }
    ]
  },
]);

export default router;