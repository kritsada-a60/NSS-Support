import { Stack, Typography } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
export default function HTimePicker({
  header = "",
  icon = false,
  width = "276px",
  placeholder = "",
  ...other
}) {
  return (
    <Stack>
      <Typography variant="body2">{header}</Typography>
      <TimePicker
        sx={{
          width: width,
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px", // Set the border radius for the input field
            height: "40px",
          },
        }}
        slotProps={{
          openPickerButton: {
            color: "primary",
          },
          inputAdornment: {
            position: "start",
          },
          textField: {
            placeholder: placeholder,
          },
        }}
        {...other}
      />
    </Stack>
  );
}
