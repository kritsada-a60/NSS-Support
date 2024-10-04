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

interface Option {
  value: string;
  label: string;
}

interface HSelectProps {
  header?: string;
  icon?: boolean;
  width?: string;
  list?: Option[];
  [key: string]: any; // To allow additional props
}

export default function HSelect({
  header = "",
  icon = false,
  width = "276px",
  list = [],
  ...other
}: HSelectProps) {
  return (
    <Stack>
      <Typography variant="body2">{header}</Typography>
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
