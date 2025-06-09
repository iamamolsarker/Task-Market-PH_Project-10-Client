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
import TaskDetails from "../pages/TaskDetails";
import EditTask from "../pages/EditTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://assignment-10-task-market-server.vercel.app/all-task/featured"
          ),
      },
      {
        path: "add-task",
        element: (
          <PrivateRoute>
            <AddTask></AddTask>
          </PrivateRoute>
        ),
      },
      {
        path: "all-task",
        element: <AllTask></AllTask>,
        loader: () =>
          fetch(
            "https://assignment-10-task-market-server.vercel.app/all-task/"
          ),
      },
      {
        path: "my-task",
        element: (
          <PrivateRoute>
            <MyTask></MyTask>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/task/:id",
        element: (
          <PrivateRoute>
            <TaskDetails></TaskDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-task-market-server.vercel.app/all-task/${params.id}`
          ),
      },
      {
        path: "edit-task/:id",
        element: (
          <PrivateRoute>
            <EditTask></EditTask>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-task-market-server.vercel.app/all-task/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
