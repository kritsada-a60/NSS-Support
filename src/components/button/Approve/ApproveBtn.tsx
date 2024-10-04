import { Button, ButtonProps } from "@mui/material";
// import { useTranslation } from "react-i18next";

export default function ApproveBtn({ children, ...other }: ButtonProps) {
  //   const { t } = useTranslation();

  return (
    <Button variant="contained" className="primaryContainedButton" {...other}>
      Approve
    </Button>
  );
}
