import { Box } from "@mui/material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const Navbar = () => {
  return (
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
        <p style={{ color: "#00A651", fontSize: "14px" }}>NSS Support</p>

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
            }}
          />
          <Box sx={{ padding: "0 12px 0 12px" }}>
            <p style={{ color: "#333333", margin: 0, fontSize: "16px" }}>
              User xxxxx
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
      </div>
    </Box>
  );
};

export default Navbar;
