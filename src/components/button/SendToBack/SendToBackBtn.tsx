import { Button, ButtonProps } from "@mui/material";
// import { useTranslation } from "react-i18next";

export default function SendToBackBtn({ children, ...other }: ButtonProps) {
  //   const { t } = useTranslation();

  return (
    <Button
      variant="outlined"
      color="inherit"
      {...other}
      sx={{ width: "150px" }}
    >
      Send To Back
    </Button>
  );
}
