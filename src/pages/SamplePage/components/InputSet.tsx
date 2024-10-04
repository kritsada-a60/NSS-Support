import { Box, Paper, Stack, Typography } from "@mui/material";
import HTextfield from "../../../components/hook-form/HTextfield";
import HDatePicker from "../../../components/hook-form/HDatePicker";
import HSelect from "../../../components/hook-form/HSelect";

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

  return (
    <Box sx={{ mt: 2 }}>
      <Paper variant="outlined" sx={{ p: 1 }}>
        <Typography variant="h5" gutterBottom>
          Input
        </Typography>

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
    </Box>
  );
};

export default InputSet;
