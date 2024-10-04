import { Button, ButtonProps } from "@mui/material";
import "../../../styles/moduleCSS.css";
// import { useTranslation } from "react-i18next";

export default function AddBtn({ children, ...other }: ButtonProps) {
  //   const { t } = useTranslation();

  return (
    <Button variant="outlined" {...other} className="primaryOutlinedButton">
      Add
    </Button>
  );
}
