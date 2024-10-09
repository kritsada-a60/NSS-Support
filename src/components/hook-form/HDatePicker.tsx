import { Stack, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { useFormContext } from "react-hook-form";

interface HDatePickerProps {
  header?: string;
  icon?: boolean;
  width?: string;
  placeholder?: string;
  name?: string;
  other?: any;
}

export default function HDatePicker({
  header = "",
  icon = false,
  width = "276px",
  placeholder = "",
  name,
  ...other
}: HDatePickerProps) {
  const { setValue } = useFormContext();

  const handleChange = (value: Dayjs | null) => {
    if (name) {
      setValue(name, value);
    }
  };
  return (
    <Stack>
      <Typography variant="body2" className="inputHField">
        {header}
      </Typography>
      <DatePicker
        format="DD/MM/YYYY"
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
        onChange={handleChange}
        {...other}
      />
    </Stack>
  );
}
