import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { RouterProvider } from "react-router-dom";

// Import router
import { Router } from "./Route/route";

import "dayjs/locale/th";

// MUI
import { CssBaseline } from "@mui/material";

// Import utility and theme
import { getSystemLang } from "./utils/getSystemLang";
import { theme } from "./styles/theme";

const MainContainer = () => {
  const locale = getSystemLang().toLowerCase();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
        <div className="application">
          <meta charSet="utf-8" />
          <title>NSS Support</title>
          <RouterProvider router={Router} />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default MainContainer;
