import { Button, ButtonProps } from "@mui/material";
// import "../../../styles/moduleCSS.css";
// import { useTranslation } from "react-i18next";

export default function AddProductBtn({ children, ...other }: ButtonProps) {
  //   const { t } = useTranslation();

  return (
    <Button variant="outlined" className="primaryOutlinedButton" {...other}>
      Add Product
    </Button>
  );
}
