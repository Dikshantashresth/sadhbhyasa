import React from "react";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/logout",
      element: <Logout />,
    },
    {
      path: "/chat/:id",
    },
    {
      path: "/dashboard/:userid",
      element: <Dashboard />,
    },
    {},
  ]);
  return <RouterProvider route={routes} />;
};

export default App;
