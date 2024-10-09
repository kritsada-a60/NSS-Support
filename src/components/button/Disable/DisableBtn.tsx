import { Button, ButtonProps } from "@mui/material";

export default function DisableBtn({ children, ...other }: ButtonProps) {
  return (
    <Button variant="contained" className="primaryContainedButton" {...other}>
      Disable
    </Button>
  );
}
