import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login";
import Home from "../pages";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
