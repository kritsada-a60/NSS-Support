import Swal, { SweetAlertIcon } from "sweetalert2";

export const AlertDialog = async (
  title: string,
  text?: string,
  icon: SweetAlertIcon = "warning"
): Promise<boolean> => {
  const result = await Swal.fire({
    title,
    text,
    icon,
    confirmButtonText: "Confirm",
    customClass: {
      confirmButton: "custom-swal-button",
    },
  });

  return result.isConfirmed;
};
