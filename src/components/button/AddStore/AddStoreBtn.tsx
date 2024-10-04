import { Button, ButtonProps } from "@mui/material";
// import { useTranslation } from "react-i18next";

export default function AddStoreBtn({ children, ...other }: ButtonProps) {
  //   const { t } = useTranslation();

  return (
    <Button variant="outlined" className="primaryOutlinedButton" {...other}>
      Add Store
    </Button>
  );
}
