import { Button, ButtonProps } from "@mui/material";
// import { useTranslation } from "react-i18next";

export default function AddBtn({ children, ...other }: ButtonProps) {
  //   const { t } = useTranslation();

  return (
    <Button
      variant="outlined"
      {...other}
      sx={{
        width: "100px",
        color: "#00A651",
        borderColor: "#00A651",
        "&:hover": {
          borderColor: "#008F43",
        },
      }}
    >
      Add
    </Button>
  );
}
