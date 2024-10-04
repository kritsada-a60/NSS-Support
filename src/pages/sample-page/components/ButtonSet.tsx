import { Box, Paper, Stack, Typography } from "@mui/material";
import {
  AddBtn,
  AddProductBtn,
  AddStoreBtn,
  ApproveBtn,
  CancelBtn,
  ConfirmBtn,
  DeployBtn,
  ExportBtn,
  ImportBtn,
  RejectBtn,
  SaveBtn,
  SearchBtn,
  SendToBackBtn,
  SubmitBtn,
  UploadBtn,
} from "../../../components/button";
import SwitchBtn from "../../../components/button/switch/Switch";

const ButtonSet = () => {
  return (
    <Box sx={{ mt: 2 }}>
      {/* Button */}
      <Paper variant="outlined" sx={{ p: 1 }}>
        <Typography variant="h5" gutterBottom>
          Button
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <ApproveBtn />
          <ConfirmBtn />
          <ImportBtn />
          <SaveBtn />
          <SubmitBtn />
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <AddBtn />
          <AddProductBtn />
          <AddStoreBtn />
          <UploadBtn />
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <CancelBtn />
          <DeployBtn />
          <SendToBackBtn />
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <ExportBtn />
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <RejectBtn />
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <SearchBtn />
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <SwitchBtn defaultChecked />
          <SwitchBtn required />
          <SwitchBtn disabled />
        </Stack>
      </Paper>
    </Box>
  );
};

export default ButtonSet;
