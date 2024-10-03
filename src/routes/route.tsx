import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);
