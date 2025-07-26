import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Login from "./pages/Login";


i

const routes = [
  {
    path: "/",
    element: <Home />
  },

  {
    path: "/about",
    element: <About />
  },

  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/profile",
    element: <UserProfile />
  },
  {
    path: "/profile/:id",
    element: <UserProfile />,
    errorElement: <ErrorPage />
  }

];

export default routes;