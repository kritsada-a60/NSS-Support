import { Button, ButtonProps } from "@mui/material";
// import { useTranslation } from "react-i18next";

export default function ConfirmBtn({ children, ...other }: ButtonProps) {
  //   const { t } = useTranslation();

  return (
    <Button variant="contained" {...other} className="primaryContainedButton">
      Confirm
    </Button>
  );
}
