import { Button, ButtonProps } from "@mui/material";
// import { useTranslation } from "react-i18next";

export default function DeployBtn({ children, ...other }: ButtonProps) {
  //   const { t } = useTranslation();

  return (
    <Button
      variant="outlined"
      color="inherit"
      {...other}
      sx={{ width: "100px" }}
    >
      Deploy
    </Button>
  );
}
