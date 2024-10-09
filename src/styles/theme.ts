import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#00A651", // Primary - Green
      dark: "#008f43",
      light: "#DFF0E7",
      contrastText: "#FFFFFF", // Primary - White (Text on Primary)
    },
    secondary: {
      main: "#BFE9D366", // Secondary - Green
      dark: "#31363D",
    },
    background: {
      default: "#F8F8F8", // Background - BG Gray
    },
    text: {
      primary: "#000000", // Text Color - 01 (darkest)
      secondary: "#4D4D4D", // Text Color - 02
    },
    action: {
      disabled: "#CCCCCC", // Button
      disabledBackground: "#F2F2F2", // Field Form
    },
    success: {
      main: "#007A53", // Success - On Info
      contrastText: "#BFDED4", // Success - Container
    },
    warning: {
      main: "#FAB000", // Warning - On Info
      contrastText: "#FFDF94", // Warning - Container
    },
    error: {
      main: "#DA291C", // Error - On Info
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // Typography
  },
});
