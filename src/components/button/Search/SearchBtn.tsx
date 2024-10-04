import { Button, ButtonProps } from "@mui/material";
// import { useTranslation } from "react-i18next";

export default function SearchBtn({ children, ...other }: ButtonProps) {
  //   const { t } = useTranslation();

  return (
    <Button variant="contained" {...other} className="containedButton">
      Search
    </Button>
  );
}
