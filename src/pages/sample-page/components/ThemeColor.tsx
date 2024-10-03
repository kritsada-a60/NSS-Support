import { Box, Paper, Stack, Typography } from "@mui/material";

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
          sx={{ ...commonStyles, borderRadius: "16px", bgcolor: "#31363D" }}
        />
        <Box
          sx={{ ...commonStyles, borderRadius: "16px", bgcolor: "#00A651" }}
        />
        <Box
          sx={{ ...commonStyles, borderRadius: "16px", bgcolor: "#BFE9D366" }}
        />
        <Box
          sx={{ ...commonStyles, borderRadius: "16px", bgcolor: "##DFF0E7" }}
        />
        <Box
          sx={{ ...commonStyles, borderRadius: "16px", bgcolor: "#F5F5F5" }}
        />
      </Stack>
    </Paper>
  );
};

export default ThemeColor;
