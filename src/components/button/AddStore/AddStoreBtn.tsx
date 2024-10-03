import { Button, ButtonProps } from "@mui/material";
// import { useTranslation } from "react-i18next";

export default function AddStoreBtn({ children, ...other }: ButtonProps) {
  //   const { t } = useTranslation();

  return (
    <Button
      variant="outlined"
      sx={{
        width: "150px",
        color: "#00A651",
        borderColor: "#00A651",
        "&:hover": {
          borderColor: "#008F43",
        },
      }}
      {...other}
    >
      Add Store
    </Button>
  );
}
