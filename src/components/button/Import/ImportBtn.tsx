import { Button, ButtonProps } from "@mui/material";
// import { useTranslation } from "react-i18next";

export default function ImportBtn({ children, ...other }: ButtonProps) {
  //   const { t } = useTranslation();

  return (
    <Button
      variant="contained"
      {...other}
      sx={{
        width: "100px",
        backgroundColor: "#00A651",
        "&:hover": {
          backgroundColor: "#008F43",
        },
      }}
    >
      Import
    </Button>
  );
}
