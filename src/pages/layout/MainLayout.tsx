import { AppBar, Box } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type PropType = {
  children: JSX.Element;
};

const MainLayout = ({ children }: PropType) => {
  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          boxShadow: "none",
        }}
      >
        <Navbar>
          <Sidebar />
        </Navbar>
        <div style={{ margin: "16px 24px" }}>{children}</div>
      </AppBar>
      ;
    </Box>
  );
};

export default MainLayout;
