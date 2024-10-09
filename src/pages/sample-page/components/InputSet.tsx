import { Box, Collapse, Paper, Stack, Typography } from "@mui/material";
import HTextfield from "../../../components/hook-form/HTextfield";
import HDatePicker from "../../../components/hook-form/HDatePicker";
import HSelect from "../../../components/hook-form/HSelect";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import HTimePicker from "../../../components/hook-form/HTimePicker";
import { FormProvider, useForm } from "react-hook-form";

interface FormData {
  textfield1: any;
  textfield2: any;
  select1: any;
  select2: any;
  datePicker1: any;
  datePicker2: any;
  timePicker1: any;
  timePicker2: any;
}

const InputSet = () => {
  const methods = useForm<FormData>({
    defaultValues: {
      textfield1: "",
      textfield2: "",
      select1: "",
      select2: "",
      datePicker1: "",
      datePicker2: "",
      timePicker1: "",
      timePicker2: "",
    },
  });
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
    // request FormProvider
    <FormProvider {...methods}>
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
                name="textfield1" //request
                header="HTextfield add icon" //optional
                icon={true} //optional
                placeholder="Placeholder" //optional
              />
              <HTextfield
                name="textfield2"
                header="HTextfield set width"
                width="500px"
              />
            </Stack>

            {/* Date */}
            <Typography variant="body2">HDatePicker</Typography>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ mb: 1 }}
            >
              <HDatePicker placeholder="Start Date" />
              <Typography>-</Typography>
              <HDatePicker placeholder="End Date" />
            </Stack>
            <Typography variant="body2">HTimePicker</Typography>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ mb: 1 }}
            >
              <HTimePicker placeholder="Start Time" />
              <Typography>-</Typography>
              <HTimePicker placeholder="End Time" />
            </Stack>

            {/* Select */}
            <Stack direction="row" spacing={2.5} sx={{ mb: 1 }}>
              <HSelect
                name="select1"
                header="HSelect"
                placeholder="Placeholder"
                defaultValue="1"
                list={list}
              />
              <HSelect
                name="select2"
                header="HSelect add icon"
                icon={true}
                placeholder="Placeholder"
                defaultValue="2"
                list={list}
              />
            </Stack>
          </Paper>
        </Collapse>
      </Box>
    </FormProvider>
  );
};

export default InputSet;
