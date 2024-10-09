import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Typography } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SportsBarRoundedIcon from "@mui/icons-material/SportsBarRounded";
import { useMenu } from "../menu/context/MenuProvider";
import logo from "../../logo.svg";
import StoreMallDirectoryRoundedIcon from "@mui/icons-material/StoreMallDirectoryRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

// กำหนก icon  menuName: Icon
const menuIcons: { [key: string]: JSX.Element } = {
  Store: <StoreMallDirectoryRoundedIcon />,
  Alcoholic: <SportsBarRoundedIcon />,
  Configuration: <TuneRoundedIcon />,
  User: <PersonRoundedIcon />,
  // Log:
};

const Sidebar = () => {
  const navigate = useNavigate();
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [activeSubItem, setActiveSubItem] = useState<string | null>(null);
  const { menuName, menuItems, setBreadcrumbs } = useMenu();

  const level1Menu = menuItems.find(
    (item) => item.menuName === menuName && item.menulevel === 1
  );
  const level2Menus = menuItems.filter(
    (item) => item.parent_id === level1Menu?._id && item.menulevel === 2
  );
  const level3Menus = menuItems.filter((item) => item.menulevel === 3);

  const handleMainItemClick = (id: string, name: string) => {
    if (openSubMenu === id) {
      setOpenSubMenu(null);
      setBreadcrumbs([]);
    } else {
      setOpenSubMenu(id);
      setBreadcrumbs([menuName, name]);
    }
  };

  const handleSubItemClick = (id: string, name: string) => {
    setActiveSubItem(id);

    if (openSubMenu) {
      const level2MenuName = level2Menus.find(
        (menu) => menu._id === openSubMenu
      )?.menuName;
      setBreadcrumbs([menuName, level2MenuName || "", name]);
    } else {
      setBreadcrumbs([menuName, name]);
    }
  };

  useEffect(() => {
    console.log("all", menuItems);
    console.log("1", level1Menu);
    console.log("2", level2Menus);
  }, [menuItems]);

  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
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
          background: "#00432E",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "40px",
        }}
        onClick={() => navigate("/store-operation")}
      >
        <Box sx={{ width: "118px", height: "40px" }}>
          <img
            src={logo}
            alt=""
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </Box>
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
        {level2Menus.map((item) => (
          <Box key={item._id}>
            {/* Main */}
            <Box
              sx={{
                backgroundColor:
                  openSubMenu === item._id ? "white" : "transparent",
                borderRadius: "8px",
              }}
            >
              <ListItemButton
                onClick={() => handleMainItemClick(item._id, item.menuName)}
                sx={{
                  height: "40px",
                  borderRadius: "8px",
                  justifyContent: "space-between", // Make space between items
                  "&:hover": {
                    backgroundColor: "white",
                    transition: "0.2s ease-in-out",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "#00A651", minWidth: "24px" }}>
                  {menuIcons[item.menuName] || null}
                </ListItemIcon>
                <Typography
                  sx={{
                    padding: "0 16px", // Keep padding for text
                    fontSize: "16px",
                    lineHeight: "20.8px",
                    fontWeight: "400",
                    flexGrow: 1, // Allow text to grow and take available space
                  }}
                >
                  {item.menuName}
                </Typography>
                {level3Menus.some(
                  (subItem) => subItem.parent_id === item._id
                ) &&
                  (openSubMenu === item._id ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  ))}
              </ListItemButton>

              {/* Submenu */}
              {openSubMenu === item._id &&
                level3Menus
                  .filter((subItem) => subItem.parent_id === item._id)
                  .map((subItem, index, array) => (
                    <ListItemButton
                      key={subItem._id}
                      onClick={() =>
                        handleSubItemClick(subItem._id, subItem.menuName)
                      }
                      sx={{
                        height: "max-content",
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        borderRadius:
                          index === array.length - 1 ? "0 0 8px 8px" : "0",
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
                          activeSubItem === subItem._id
                            ? "#00A651"
                            : "transparent",
                        color:
                          activeSubItem === subItem._id
                            ? "white"
                            : "text.secondary",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: "8px",
                          padding: "8px",
                          color:
                            activeSubItem === subItem._id ? "white" : "#666666",
                        }}
                      >
                        <Box
                          className="icon-box"
                          sx={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            background:
                              activeSubItem === subItem._id
                                ? "white"
                                : "#666666",
                          }}
                        />
                      </ListItemIcon>
                      <Typography
                        className="text"
                        sx={{
                          fontSize: "14px",
                          lineHeight: "18.2px",
                          color:
                            activeSubItem === subItem._id
                              ? "white"
                              : "text.secondary",
                        }}
                      >
                        {subItem.menuName}
                      </Typography>
                    </ListItemButton>
                  ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
