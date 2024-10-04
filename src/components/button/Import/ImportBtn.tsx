import { Button, ButtonProps } from "@mui/material";
// import { useTranslation } from "react-i18next";

export default function ImportBtn({ children, ...other }: ButtonProps) {
  //   const { t } = useTranslation();

  return (
    <Button variant="contained" {...other} className="primaryContainedButton">
      Import
    </Button>
  );
}
