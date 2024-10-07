import { Box, Collapse, Paper, Stack, Typography } from "@mui/material";
import HTextfield from "../../../components/hook-form/HTextfield";
import HDatePicker from "../../../components/hook-form/HDatePicker";
import HSelect from "../../../components/hook-form/HSelect";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import HTimePicker from "../../../components/hook-form/HTimePicker";
const InputSet = () => {
  const list = [
    {
      value: "1",
      label: "option 1",
    },
    {
      value: "2",
      label: "option 2",
    },
    {
      value: "3",
      label: "option 3",
    },
  ];

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
          Input
        </Typography>
        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Stack>
      <Collapse in={expanded}>
        <Paper variant="outlined" sx={{ p: 1 }}>
          {/* Text */}
          <Stack direction="row" spacing={2.5} sx={{ mb: 1 }}>
            <HTextfield
              header="HTextfield add icon"
              name="nameForHook"
              icon={true}
              placeholder="Placeholder"
            />
            <HTextfield
              header="HTextfield set width"
              name="nameForHook"
              width="500px"
            />
          </Stack>

          {/* Date */}
          <Typography variant="body2">HDatePicker</Typography>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
            <HDatePicker name="nameForHook" placeholder="Start Date" />
            <Typography>-</Typography>
            <HDatePicker name="nameForHook" placeholder="End Date" />
          </Stack>
          <Typography variant="body2">HTimePicker</Typography>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
            <HTimePicker name="nameForHook" placeholder="Start Time" />
            <Typography>-</Typography>
            <HTimePicker name="nameForHook" placeholder="End Time" />
          </Stack>

          {/* Select */}
          <Stack direction="row" spacing={2.5} sx={{ mb: 1 }}>
            <HSelect
              header="HSelect"
              name="nameForHook"
              placeholder="Placeholder"
              list={list}
            />
            <HSelect
              header="HSelect add icon"
              name="nameForHook"
              icon={true}
              placeholder="Placeholder"
              list={list}
            />
          </Stack>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default InputSet;
