import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import ErrorPage from "./ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import Projects from "./components/Projects/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
      path: "/",
      element: <Home></Home>
    }, 
    {
      path: "/blogs",
      element:<Blogs></Blogs>
    },
    {
      path: "/projects",
      element: <Projects></Projects>
    },
  ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
