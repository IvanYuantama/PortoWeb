import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary.jsx";
import MainPage from "./components/MainPage.jsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <MainPage />,
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/error",
    element: <ErrorBoundary />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
