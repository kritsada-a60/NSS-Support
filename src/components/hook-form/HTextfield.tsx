import { InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { useFormContext } from "react-hook-form";
interface HTextfieldProps {
  header?: string;
  icon?: boolean;
  width?: string;
  inputRef?: React.Ref<any>; // Add inputRef for react-hook-form registration
  name: string;
  [key: string]: any;
}
export default function HTextfield({
  header = "",
  icon = false,
  // width = "276px",
  width = "100%",
  name,
  ...other
}: HTextfieldProps) {
  const { register } = useFormContext();
  return (
    <Stack>
      <Typography variant="body2" className="inputHField">
        {header}
      </Typography>
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
        {...register(name)}
        {...other}
      />
    </Stack>
  );
}
