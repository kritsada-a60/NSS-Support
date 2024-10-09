import { Button, ButtonProps } from "@mui/material";
// import { useTranslation } from "react-i18next";

export default function ClearBtn({ children, ...other }: ButtonProps) {
  //   const { t } = useTranslation();

  return (
    <Button variant="outlined" className="primaryOutlinedButton" {...other}>
      Clear
    </Button>
  );
}
