import { Box, Paper, Stack, Typography } from "@mui/material";
import { theme } from "../../../styles/theme";

const ThemeColor = () => {
  const commonStyles = {
    bgcolor: "background.paper",
    borderColor: "text.primary",
    m: 1,
    // border: 1,
    width: "5rem",
    height: "5rem",
  };
  return (
    <Paper variant="outlined" sx={{ p: 1 }}>
      <Typography variant="h5" gutterBottom>
        Color
      </Typography>
      <Stack direction="row" spacing={1}>
        <Box
          sx={{
            ...commonStyles,
            borderRadius: "16px",
            bgcolor: theme.palette.secondary.dark,
          }}
        />
        <Box
          sx={{
            ...commonStyles,
            borderRadius: "16px",
            bgcolor: theme.palette.primary.main,
          }}
        />
        <Box
          sx={{
            ...commonStyles,
            borderRadius: "16px",
            bgcolor: theme.palette.secondary.main,
          }}
        />
        <Box
          sx={{
            ...commonStyles,
            borderRadius: "16px",
            bgcolor: theme.palette.primary.light,
          }}
        />
        <Box
          sx={{
            ...commonStyles,
            borderRadius: "16px",
            bgcolor: theme.palette.background.default,
          }}
        />
      </Stack>
    </Paper>
  );
};

export default ThemeColor;
