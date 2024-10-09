import { Add } from "@mui/icons-material";
import { Button, ButtonProps } from "@mui/material";
// import { useTranslation } from "react-i18next";
interface BtnProps extends ButtonProps {
  icon?: boolean; // Add the 'icon' prop definition
}
export default function AddStoreBtn({ icon = true, ...other }: BtnProps) {
  //   const { t } = useTranslation();

  return (
    <Button
      variant="outlined"
      className="primaryOutlinedButton"
      startIcon={icon ? <Add /> : undefined}
      {...other}
    >
      Add Store
    </Button>
  );
}
