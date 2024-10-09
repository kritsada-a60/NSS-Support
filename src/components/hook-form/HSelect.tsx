import {
  Stack,
  Select,
  Typography,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { theme } from "../../styles/theme";
import { SearchOutlined } from "@mui/icons-material";
import { useFormContext } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface HSelectProps {
  header?: string;
  icon?: boolean;
  width?: string;
  list?: Option[];
  name: string;
  [key: string]: any;
}

export default function HSelect({
  header = "",
  icon = false,
  width = "276px",
  list = [],
  name,
  ...other
}: HSelectProps) {
  const { register } = useFormContext();
  return (
    <Stack>
      <Typography variant="body2" className="inputHField">
        {header}
      </Typography>
      <Select
        sx={{
          width: width,
          "& .MuiSelect-icon": {
            color: theme.palette.primary.main,
          },
          "& fieldset": { borderRadius: "8px" },
        }}
        IconComponent={KeyboardArrowDownIcon}
        size="small"
        startAdornment={
          icon ? (
            <InputAdornment position="start">
              <SearchOutlined color="primary" />
            </InputAdornment>
          ) : undefined
        }
        {...register(name)}
        {...other}
      >
        {list.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
}
