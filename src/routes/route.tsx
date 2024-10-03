import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login";
import Home from "../pages";
import SamplePage from "../pages/SamplePage/SamplePage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "sample",
    element: <SamplePage />,
  },
]);
