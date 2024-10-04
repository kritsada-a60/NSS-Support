import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login";
import Home from "../pages/menu";
import SamplePage from "../pages/sample-page/SamplePage";

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
