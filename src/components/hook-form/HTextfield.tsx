import { InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
export default function HTextfield({
  header = "",
  icon = false,
  width = "276px",
  ...other
}) {
  return (
    <Stack>
      <Typography variant="body2">{header}</Typography>
      <TextField
        placeholder=""
        sx={{
          width: width,
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px", // Set the border radius for the input field
          },
        }}
        size="small"
        {...(icon && {
          slotProps: {
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined color="primary" />
                </InputAdornment>
              ),
            },
          },
        })}
        {...other}
      />
    </Stack>
  );
}
