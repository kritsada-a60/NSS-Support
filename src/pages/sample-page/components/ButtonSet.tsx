import { Box, Collapse, Paper, Stack, Typography } from "@mui/material";
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
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const ButtonSet = () => {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };
  return (
    <Box sx={{ mt: 2 }}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        onClick={handleToggle}
      >
        <Typography variant="h5" gutterBottom sx={{ cursor: "pointer" }}>
          Buttons
        </Typography>
        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Stack>
      <Collapse in={expanded}>
        <Paper variant="outlined" sx={{ p: 1 }}>
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
      </Collapse>
    </Box>
  );
};

export default ButtonSet;
