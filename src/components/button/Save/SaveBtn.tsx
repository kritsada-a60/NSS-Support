import { Button, ButtonProps } from "@mui/material";
// import { useTranslation } from "react-i18next";

export default function SaveBtn({ children, ...other }: ButtonProps) {
  //   const { t } = useTranslation();

  return (
    <Button variant="contained" className="submitButton" {...other}>
      Save
    </Button>
  );
}
