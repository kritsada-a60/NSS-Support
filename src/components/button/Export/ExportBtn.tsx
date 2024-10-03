import { Button, ButtonProps } from "@mui/material";
// import { useTranslation } from "react-i18next";

export default function ExportBtn({ children, ...other }: ButtonProps) {
  //   const { t } = useTranslation();

  return (
    <Button
      variant="outlined"
      color="warning"
      {...other}
      sx={{ width: "100px" }}
    >
      Export
    </Button>
  );
}
