import { Button, ButtonProps } from "@mui/material";
// import { useTranslation } from "react-i18next";

export default function SearchBtn({ children, ...other }: ButtonProps) {
  //   const { t } = useTranslation();

  return (
    <Button variant="contained" {...other} sx={{ width: "100px" }}>
      Search
    </Button>
  );
}
