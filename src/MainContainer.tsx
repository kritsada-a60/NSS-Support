import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet";

// Import router
import { Router } from "./routes/route";

import "dayjs/locale/th";

// MUI
import { CssBaseline } from "@mui/material";

// Import utility and theme
import { getSystemLang } from "./utils/getSystemLang";
import { theme } from "./styles/theme";
import Navbar from "./pages/layout/Navbar";

const MainContainer = () => {
  const locale = getSystemLang().toLowerCase();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
        <div className="application">
          <Helmet>
            <meta charSet="utf-8" />
            <title>NSS Support</title>
          </Helmet>
          <Navbar />
          <RouterProvider router={Router} />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default MainContainer;
