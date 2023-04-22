import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import App from "./App";
import Main from "./Main";
import Projects from "./Projects";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Main /> },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
