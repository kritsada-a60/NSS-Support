import { Button, ButtonProps } from "@mui/material";
import "../../../styles/moduleCSS.css";
import { Add } from "@mui/icons-material";
// import { useTranslation } from "react-i18next";
interface BtnProps extends ButtonProps {
  icon?: boolean; // Add the 'icon' prop definition
}
export default function RequestBtn({ icon = true, ...other }: BtnProps) {
  //   const { t } = useTranslation();

  return (
    <Button
      variant="contained"
      className="primaryContainedButton"
      startIcon={icon ? <Add /> : undefined}
      {...other}
    >
      Request Form
    </Button>
  );
}
