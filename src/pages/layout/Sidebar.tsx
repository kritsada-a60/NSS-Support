import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

const menuIcons: { [key: string]: JSX.Element } = {
  Store: <StoreMallDirectoryRoundedIcon />,
  Alcoholic: <SportsBarRoundedIcon />,
  Configuration: <TuneRoundedIcon />,
  User: <PersonRoundedIcon />,
};

const Sidebar = () => {
  const navigate = useNavigate();
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [activeSubItem, setActiveSubItem] = useState<string | null>(null);
  const { menuItems } = useMenu();

  const params = useParams();
  const { levelA, levelB, levelC } = params;

  const menuList = menuItems.find((menu) => menu.screenId === levelA);

  const handleMainItemClick = (screenId: string, item: any) => {
    setOpenSubMenu(item.id);
    if (item.children && item.children.length > 0) {
      setActiveSubItem(item.children[0].id); // Active Submenu ตัวแรก
      navigate(
        `/store-operation/${levelA}/${screenId}/${item.children[0].screenId}`
      );
    } else {
      navigate(`/store-operation/${levelA}/${screenId}`);
    }
  };

  useEffect(() => {
    if (menuList && Array.isArray(menuList.children) && openSubMenu) {
      const selectedMenu = menuList.children.find(
        (menu) => menu.id === openSubMenu
      );

      if (
        selectedMenu &&
        Array.isArray(selectedMenu.children) &&
        selectedMenu.children.length > 0
      ) {
        setActiveSubItem(selectedMenu.children[0].id);
      }
    }
  }, [openSubMenu, menuList]);

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
            alt="Logo"
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
        {menuList?.children?.map((item) => (
          <Box key={item.id}>
            <Box
              sx={{
                backgroundColor:
                  openSubMenu === item.id ? "white" : "transparent",
                borderRadius: "8px",
              }}
            >
              <ListItemButton
                onClick={() => handleMainItemClick(item.screenId, item)}
                sx={{
                  height: "40px",
                  borderRadius: "8px",
                  justifyContent: "space-between",
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
                    padding: "0 16px",
                    fontSize: "16px",
                    lineHeight: "20.8px",
                    fontWeight: "400",
                    flexGrow: 1,
                  }}
                >
                  {item.menuName}
                </Typography>
                {item.children &&
                  item.children.length > 0 &&
                  (openSubMenu === item.id ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  ))}
              </ListItemButton>

              {openSubMenu === item.id &&
                item.children?.map((subItem) => (
                  <ListItemButton
                    key={subItem.id}
                    onClick={() => {
                      setActiveSubItem(subItem.id);
                      navigate(
                        `/store-operation/${levelA}/${item.screenId}/${subItem.screenId}`
                      );
                    }}
                    sx={{
                      height: "max-content",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      borderRadius: "0",
                      "&:hover": {
                        backgroundColor: "#00A651",
                        color: "white",
                        transition: "0.2s ease-in-out",
                      },
                      backgroundColor:
                        activeSubItem === subItem.id
                          ? "#00A651"
                          : "transparent",
                      color:
                        activeSubItem === subItem.id
                          ? "white"
                          : "text.secondary",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: "8px",
                        padding: "8px",
                        color:
                          activeSubItem === subItem.id ? "white" : "#666666",
                      }}
                    >
                      <Box
                        sx={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background:
                            activeSubItem === subItem.id ? "white" : "#666666",
                        }}
                      />
                    </ListItemIcon>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        lineHeight: "18.2px",
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
