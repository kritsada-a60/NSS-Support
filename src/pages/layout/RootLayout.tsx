import { MenuProvider } from "./context/MenuProvider";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <MenuProvider>
      <Navbar>
        <Outlet />
      </Navbar>
    </MenuProvider>
  );
};

export default RootLayout;
