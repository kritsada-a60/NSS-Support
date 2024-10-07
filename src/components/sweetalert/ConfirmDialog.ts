import Swal from "sweetalert2";

export const ConfirmDialog = async (
  title: string,
  text?: string,
  confirmButtonText: string = "Confirm",
  cancelButtonText: string = "Cancel"
): Promise<boolean> => {
  const result = await Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText,
    customClass: {
      confirmButton: "custom-swal-button",
      cancelButton: "custom-swal-cancel-button",
      actions: "swal2-actions",
    },
  });

  return result.isConfirmed;
};
