import { Box, Paper, Typography, IconButton } from "@mui/material";
import { EditOutlined } from "@mui/icons-material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
interface DataRow {
  id: number;
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  field6: string;
}
const generateRandomData = (numRows: number): DataRow[] => {
  const data: DataRow[] = [];

  for (let i = 1; i <= numRows; i++) {
    data.push({
      id: i,
      field1: `Value ${i}-1`,
      field2: `Value ${i}-2`,
      field3: `Value ${i}-3`,
      field4: `Value ${i}-4`,
      field5: `Value ${i}-5`,
      field6: `Value ${i}-6`,
    });
  }

  return data;
};

const SampleTable = () => {
  const columns = [
    {
      field: "field1",
      headerName: "header1",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton
          onClick={() => {
            console.log(params.row);
          }}
        >
          <EditOutlined color="warning" />
        </IconButton>
      ),
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "field2",
      headerName: "header2",
      flex: 1,
      disableColumnMenu: true,
    },
    {
      field: "field3",
      headerName: "header3",
      flex: 1,
      disableColumnMenu: true,
    },
    {
      field: "field4",
      headerName: "header4",
      flex: 1,
      disableColumnMenu: true,
    },
    {
      field: "field5",
      headerName: "header5",
      flex: 1,
      disableColumnMenu: true,
    },
    {
      field: "field6",
      headerName: "header6",
      flex: 1,
      disableColumnMenu: true,
    },
  ];
  const rows = generateRandomData(20);
  return (
    <Box sx={{ mt: 2 }}>
      <Paper variant="outlined" sx={{ p: 1 }}>
        <Typography variant="h5" gutterBottom>
          Table *to be continue not paginate yet*
        </Typography>
        <DataGrid
          columns={columns}
          rows={rows}
          className="custom-data-grid"
          sx={{ borderRadius: "12px" }}
        />
      </Paper>
    </Box>
  );
};

export default SampleTable;
