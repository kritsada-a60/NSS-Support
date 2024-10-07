import { Box, Button, Collapse, Paper, Stack, Typography } from "@mui/material";
import { ConfirmDialog } from "../../../components/sweetalert/ConfirmDialog";
import { AlertDialog } from "../../../components/sweetalert/AlertDialog";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const SampleDialog = () => {
  const handleConfirm = async () => {
    const confirmed = await ConfirmDialog(
      "Confirm Action",
      "Are you sure you want to proceed?",
      "Confirm",
      "Cancel"
    );

    if (confirmed) {
      console.log("User confirmed");
    } else {
      console.log("User canceled");
    }
  };

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
          Alert Dialog
        </Typography>
        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Stack>
      <Collapse in={expanded}>
        <Paper variant="outlined" sx={{ p: 1 }}>
          <Button
            onClick={() => {
              AlertDialog(
                "Alert Title",
                "This is an alert message!",
                "warning"
              );
            }}
            color="warning"
          >
            Alert warning
          </Button>
          <Button
            onClick={() => {
              AlertDialog("Alert Title", "This is an alert message!", "error");
            }}
            color="error"
          >
            Alert error
          </Button>
          <Button
            onClick={() => {
              AlertDialog(
                "Alert Title",
                "This is an alert message!",
                "success"
              );
            }}
            color="info"
          >
            Alert info
          </Button>
          <Button
            onClick={() => {
              AlertDialog(
                "Alert Title",
                "This is an alert message!",
                "success"
              );
            }}
            color="success"
          >
            Alert success
          </Button>

          <Button onClick={handleConfirm} color="info">
            Confirm Dialog
          </Button>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default SampleDialog;
