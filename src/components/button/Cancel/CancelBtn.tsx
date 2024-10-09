import { Button, ButtonProps } from "@mui/material";
// import { useTranslation } from "react-i18next";

export default function CancelBtn({ children, ...other }: ButtonProps) {
  //   const { t } = useTranslation();

  return (
    <Button variant="outlined" className="submitButton" {...other}>
      Cancel
    </Button>
  );
}
