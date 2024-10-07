import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useState } from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import StoreMallDirectoryRoundedIcon from "@mui/icons-material/StoreMallDirectoryRounded";
import SportsBarRoundedIcon from "@mui/icons-material/SportsBarRounded";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const [activeSubItem, setActiveSubItem] = useState<number | null>(null);

  const drawerWidth = 240;

  const menuItems = [
    { id: 1, title: "Menu", icon: HomeRoundedIcon, path: "" },
    {
      id: 2,
      title: "Store",
      icon: StoreMallDirectoryRoundedIcon,
      path: "",
    },
    {
      id: 3,
      title: "Alcoholic",
      icon: SportsBarRoundedIcon,
      path: "",
      children: [
        {
          segment: "alcoholic not serve",
          title: "Not Alcoholic",
          path: "",
        },
        {
          segment: "alcoholic ptt",
          title: "Alcoholic PTT",
          path: "",
        },
      ],
    },
  ];

  const handleMainItemClick = (id: number) => {
    if (openSubMenu === id) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(id);
    }
  };

  const handleSubItemClick = (id: number) => {
    setActiveSubItem(id);
    setActiveItem(null);
  };

  return (
    <div>
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
          onClick={() => navigate("/store-operation")}
        >
          <Box color="white">Logo Name</Box>
        </Box>

        <Box
          sx={{
            padding: "0 16px",
            color: "#00A651",
            gap: "8px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {menuItems.map((item) => (
            <Box key={item.id}>
              {/* Main */}
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
                  onClick={() => handleMainItemClick(item.id)}
                  sx={{
                    backgroundColor:
                      activeItem === item.id ? "white" : "transparent",
                    height: "40px",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "white",
                      transition: "0.2s ease-in-out",
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: "#00A651", minWidth: "24px" }}>
                    {item.icon && <item.icon />}
                  </ListItemIcon>
                  <Typography
                    sx={{
                      padding: "0 16px",
                      fontSize: "16px",
                      lineHeight: "20.8px",
                      fontWeight: "400",
                    }}
                  >
                    {item.title}
                  </Typography>
                  {item.children &&
                    (openSubMenu === item.id ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    ))}
                </ListItemButton>

                {/* Submenu */}
                {item.children && openSubMenu === item.id && (
                  <Box>
                    {item.children.map((child, index) => (
                      <ListItemButton
                        key={index}
                        onClick={() => handleSubItemClick(index)}
                        sx={{
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          gap: "16px",
                          borderRadius:
                            index === item.children.length - 1
                              ? "0 0 8px 8px"
                              : "0",
                          "&:hover": {
                            backgroundColor: "#00A651",
                            color: "white",
                            transition: "0.2s ease-in-out",
                            "& .icon-box": {
                              background: "white",
                            },
                            "& .text": {
                              color: "white",
                            },
                          },
                          backgroundColor:
                            activeSubItem === index ? "#00A651" : "transparent",
                          color:
                            activeSubItem === index
                              ? "white"
                              : "text.secondary",
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: "8px",
                            padding: "8px",
                            color:
                              activeSubItem === index ? "white" : "#666666",
                          }}
                        >
                          <Box
                            className="icon-box"
                            sx={{
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              background:
                                activeSubItem === index ? "white" : "#666666",
                            }}
                          />
                        </ListItemIcon>
                        <Typography
                          className="text"
                          sx={{
                            fontSize: "14px",
                            lineHeight: "18.2px",
                            color:
                              activeSubItem === index
                                ? "white"
                                : "text.secondary",
                          }}
                        >
                          {child.title}
                        </Typography>
                      </ListItemButton>
                    ))}
                  </Box>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Drawer>
    </div>
  );
};

export default Sidebar;
