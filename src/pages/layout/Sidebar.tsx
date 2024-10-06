import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { useState } from "react";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import DesktopWindowsRoundedIcon from "@mui/icons-material/DesktopWindowsRounded";
import MailIcon from "@mui/icons-material/Mail";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navbar from "./Navbar";

export default function Sidebar() {
  const drawerWidth = 240;

  const menuItems = [
    { id: 1, title: "Dashboard", icon: DashboardRoundedIcon, path: "" },
    {
      id: 2,
      title: "Management",
      icon: DesktopWindowsRoundedIcon,
      path: "",
      children: [
        {
          segment: "sales",
          title: "Sales",
          // icon: BarChartIcon,
          path: "",
        },
        {
          segment: "traffic",
          title: "Traffic",
          // icon: DescriptionIcon,
          path: "",
        },
      ],
    },
    { id: 3, title: "Sample", icon: MailIcon, path: "/sample" },
  ];

  const [activeItem, setActiveItem] = useState<number | null>(null);
  // const [activeSubItem, setActiveSubItem] = useState<string | null>(null);

  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const handleItemClick = (id: number) => {
    setActiveItem(id);
    if (openSubMenu === id) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(id);
    }
  };

  // const handleSubItemClick = (title: string) => {
  //   setActiveSubItem(title);
  // };
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
        <Navbar />
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#BFE9D366",
            border: 0,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box
          sx={{
            height: "56px",
            background: "#31363D",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <Box color="white">Logo Name</Box>
        </Box>

        {menuItems.map((item) => (
          <Box key={item.id} sx={{ padding: "0 16px", color: "#00A651" }}>
            {/* Main Item */}
            <Box
              sx={{
                backgroundColor:
                  activeItem === item.id || openSubMenu === item.id
                    ? "white"
                    : "transparent",
                borderRadius: "8px",
              }}
            >
              <ListItemButton
                onClick={() => handleItemClick(item.id)}
                sx={{
                  backgroundColor:
                    activeItem === item.id ? "white" : "transparent",
                  height: "40px",
                  marginBottom: "8px",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "white",
                    transition: "background-color 0.2s ease-in-out",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "#00A651", minWidth: "24px" }}>
                  {item.icon && <item.icon />}
                </ListItemIcon>
                <ListItemText primary={item.title} sx={{ padding: "0 16px" }} />
                {item.children &&
                  (openSubMenu === item.id ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  ))}
              </ListItemButton>
            </Box>
          </Box>
        ))}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "#F5F5F5", height: "100vh", p: 3 }}
      >
        <Toolbar />
        <Typography
          sx={{
            marginBottom: 2,
            color: "#333333",
            fontSize: "32px",
            fontWeight: "700",
          }}
        >
          Infomation Management
        </Typography>
        <div>content</div>
      </Box>
    </Box>
  );
}
