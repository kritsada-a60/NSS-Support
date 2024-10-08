import { MenuProvider } from "../menu/context/MenuProvider";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <MenuProvider>
      <Outlet />
    </MenuProvider>
  );
};

export default RootLayout;
