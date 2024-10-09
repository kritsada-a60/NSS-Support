import { Box } from "@mui/material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useLocation, useNavigate } from "react-router-dom";
import { useMenu } from "../menu/context/MenuProvider";
import { useEffect, useState } from "react";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";

type PropType = {
  children: JSX.Element;
};

const Navbar = ({ children }: PropType) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { menuName, breadcrumbs } = useMenu();

  const isLoginSuccess = location.pathname.startsWith("/store-operation");

  const [showBreadcrumbs, setShowBreadcrumbs] = useState<Boolean>(false);
  const userName = "Username Kub";
  const userInitial = userName.charAt(0).toUpperCase();

  useEffect(() => {
    if (breadcrumbs.length > 0) {
      setShowBreadcrumbs(true);
    } else {
      setShowBreadcrumbs(false);
    }
  }, [breadcrumbs]);

  return (
    <div>
      <Box
        sx={{
          minHeight: "56px",
          display: "flex",
          alignItems: "center",
          padding: "0px 24px 0 24px",
          background: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              cursor: "pointer",
              color: "text.sencondary",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {showBreadcrumbs ? (
              breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <span
                    key={index}
                    style={{ color: isLast ? "#00A651" : "#999999" }}
                  >
                    {crumb}
                    {index < breadcrumbs.length - 1 && (
                      <NavigateNextRoundedIcon
                        style={{
                          fontWeight: isLast ? "bold" : "normal",
                          verticalAlign: "middle",
                          margin: "0 4px",
                          color: "black",
                        }}
                      />
                    )}
                  </span>
                );
              })
            ) : (
              <p>{menuName}</p>
            )}
          </div>
          {isLoginSuccess && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "40px",
                padding: "8px",
              }}
            >
              {/* Picture profile */}
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  background: "#00A651",
                  borderRadius: "999px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                {userInitial}
              </Box>
              <Box sx={{ padding: "0 12px 0 12px" }}>
                <p style={{ color: "#333333", margin: 0, fontSize: "16px" }}>
                  {userName}
                </p>
                <p style={{ color: "#666666", margin: 0, fontSize: "12px" }}>
                  I AM Administrator
                </p>
              </Box>

              {/* button logout */}
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  background: "#DFF0E7",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => navigate("/")}
              >
                <LogoutRoundedIcon
                  style={{
                    width: "20px",
                    height: "20px",
                    color: "#00A651",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Box>
          )}
        </div>
      </Box>
      <div>{children}</div>
    </div>
  );
};

export default Navbar;
