import { useForm, FormProvider } from "react-hook-form";
import { ClearBtn, SearchBtn } from "../../../../../components/button";
import { Grid, IconButton, Stack, Typography } from "@mui/material";
import HTextfield from "../../../../../components/hook-form/HTextfield";
import HSelect from "../../../../../components/hook-form/HSelect";
import HDatePicker from "../../../../../components/hook-form/HDatePicker";
import DataGridServer from "../../../../../components/datagridServer/DataGridServer";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { EditOutlined } from "@mui/icons-material";
import { useState } from "react";
import sampleData from "./component/sampleData";

interface FormData {
  name: string;
  status: string;
  startDate: string;
  endDate: string;
}

const AlcoholicIslands = () => {
  const methods = useForm<FormData>({
    defaultValues: {
      name: "",
      status: "",
      startDate: "",
      endDate: "",
    },
  });
  const { handleSubmit, reset, getValues, register } = methods;

  const [page, setPage] = useState({
    currentPage: 1,
    pageSize: 10,
    field: "",
    sort: "",
  });
  const [rows, setRows] = useState(sampleData);

  const onSubmit = (data: FormData) => {
    console.log("Submitted Data:", getValues()); // Will log the entire form data
  };

  const onReset = () => {
    reset();
  };

  const options = [
    { value: "0", label: "All" },
    { value: "1", label: "Beer" },
    { value: "2", label: "Wine" },
    { value: "3", label: "Spirits" },
  ];

  const columns = [
    {
      field: "edit",
      headerName: "",
      width: 70,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton
          onClick={() => {
            console.log(params.row);
          }}
        >
          <EditOutlined color="primary" />
        </IconButton>
      ),
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      disableColumnMenu: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      disableColumnMenu: true,
    },
  ];

  const onPageChange = (
    page: number,
    size: number,
    field: string,
    sort: string
  ) => {
    console.log(
      `currentPage: ${page}, pageSize: ${size}, field: ${field}, sort: ${sort}`
    );
    setPage({ currentPage: page, pageSize: size, field: field, sort: sort });
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            direction="row"
            spacing={1}
            columns={16}
            sx={{
              justifyContent: "space-between",
              alignItems: "flex-end",
              mb: 2,
            }}
          >
            <Grid item xs={3.2}>
              <Typography variant="body2" className="inputHField">
                Name
              </Typography>
              <HTextfield
                name="name"
                placeholder="Placeholder"
                width={"100%"}
              />
            </Grid>
            <Grid item xs={3.2}>
              <Typography variant="body2" className="inputHField">
                Status
              </Typography>
              <HSelect
                name="status"
                list={options}
                defaultValue="0"
                width={"100%"}
              />
            </Grid>
            <Grid item xs={3.2}>
              <Typography variant="body2" className="inputHField">
                Date
              </Typography>
              <HDatePicker
                name="startDate"
                placeholder="Start Date"
                width={"100%"}
              />
            </Grid>
            <Grid item xs={3.2}>
              <HDatePicker
                name="endDate"
                placeholder="End Date"
                width={"100%"}
              />
            </Grid>
            <Grid item xs={2.4}>
              <Stack direction="row" spacing={1}>
                <ClearBtn />
                <SearchBtn type="submit" variant="contained" />
              </Stack>
            </Grid>
          </Grid>
          {/* <Grid
            container
            direction="row"
            spacing={1}
            columns={16}
            sx={{
              justifyContent: "space-between",
              alignItems: "flex-end",
              mb: 1,
            }}
          >
            <Grid item xs={12.8}></Grid>
            <Grid item xs={2.4}>
              <AddBtn sx={{ width: "100%" }} />
            </Grid>
          </Grid> */}
        </form>
      </FormProvider>
      <DataGridServer
        columns={columns}
        rows={rows}
        page={page}
        height={"400px"}
        rowCount={rows.length}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default AlcoholicIslands;
