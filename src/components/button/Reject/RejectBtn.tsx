import { Button, ButtonProps } from "@mui/material";
// import { useTranslation } from "react-i18next";

export default function RejectBtn({ children, ...other }: ButtonProps) {
  //   const { t } = useTranslation();

  return (
    <Button
      variant="contained"
      color="error"
      {...other}
      sx={{ width: "100px" }}
    >
      Reject
    </Button>
  );
}
