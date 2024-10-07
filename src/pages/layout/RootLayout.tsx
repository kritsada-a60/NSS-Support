import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Navbar>
      <Outlet />
    </Navbar>
  );
};

export default RootLayout;
