import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login";
import SamplePage from "../pages/sample-page/SamplePage";
import LandingPage from "../pages/landing-page/LandingPage";
import Home from "../pages/layout";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/store-operation",
    element: <LandingPage />,
  },
  {
    path: "/store-operation/information",
    element: <Home />, //แก้ภายหลัง
  },
  {
    path: "sample",
    element: <SamplePage />,
  },
]);
