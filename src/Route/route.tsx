import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/login";
import SamplePage from "../pages/SamplePage/SamplePage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "sample",
    element: <SamplePage />,
  },
]);
