import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { menuItems } from "./menu";

const LandingPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        gap: "56px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "-100px",
      }}
    >
      {menuItems.map((item) => (
        <Link
          to={`/store-operation/${item.path}`}
          style={{ textDecoration: "none" }}
          key={item.label}
        >
          <div
            style={{
              width: "217px",
              height: "300px",
              background: "#E8E1D9",
              borderRadius: "20px",
              marginTop: "32px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <div style={{ paddingTop: "32px", paddingBottom: "24px" }}>
              <img
                src="https://www.kindpng.com/picc/m/567-5674919_inventory-management-inventory-management-system-png-transparent-png.png"
                alt=""
                style={{
                  objectFit: "cover",
                  height: "150px",
                  width: "150px",
                  borderRadius: "50%",
                }}
              />
            </div>
            <p
              style={{
                color: "#333333",
                fontSize: "24px",
                lineHeight: "31.2px",
                fontWeight: "500",
                margin: 0,
              }}
            >
              {item.label}
            </p>
          </div>
        </Link>
      ))}
    </Box>
  );
};

export default LandingPage;
