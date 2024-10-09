import { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  IconButton,
  Stack,
  Collapse,
} from "@mui/material";
import { EditOutlined } from "@mui/icons-material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import DataGridServer from "../../../components/datagridServer/DataGridServer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface DataRow {
  id: number;
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  field6: string;
}

const SampleTable = () => {
  const [page, setPage] = useState({
    currentPage: 1,
    pageSize: 10,
    field: "",
    sort: "",
  });
  const [selectionModel, setSelectionModel] = useState<any[]>([]);

  const rowCount = 499; //simulate
  const [rows, setRows] = useState<DataRow[]>([]);

  const generateRandomData = (page: number, numRows: number): DataRow[] => {
    const data: DataRow[] = [];

    for (let i = 1; i <= numRows; i++) {
      data.push({
        id: i,
        field1: `Value ${i}-1 page ${page}`,
        field2: `Value ${i}-2 page ${page}`,
        field3: `Value ${i}-3 page ${page}`,
        field4: `Value ${i}-4 page ${page}`,
        field5: `Value ${i}-5 page ${page}`,
        field6: `Value ${i}-6 page ${page}`,
      });
    }

    return data;
  };

  const columns = [
    {
      field: "field1",
      headerName: "header1",
      width: 100,
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
      width: 300,
      // flex: 1,
      disableColumnMenu: true,
    },
    {
      field: "field3",
      headerName: "header3",
      width: 300,
      // flex: 1,
      disableColumnMenu: true,
    },
    {
      field: "field4",
      headerName: "header4",
      width: 300,
      // flex: 1,
      disableColumnMenu: true,
    },
    {
      field: "field5",
      headerName: "header5",
      // flex: 1,
      width: 300,
      disableColumnMenu: true,
    },
    {
      field: "field6",
      headerName: "header6",
      width: 300,
      disableColumnMenu: true,
    },
  ];

  useEffect(() => {
    const newRows = generateRandomData(page.currentPage, page.pageSize);
    setRows(newRows);
  }, [page.currentPage, page.pageSize]);

  const onPageChange = (
    page: number,
    size: number,
    field: string,
    sort: string
  ) => {
    console.log(
      `currentPage: ${page}, pageSize: ${size}, field: ${field}, sort: ${sort}\nselectionModel: ${selectionModel}`
    );

    //Call api here when change page or pagesize by using this parameter
    setPage({ currentPage: page, pageSize: size, field: field, sort: sort });
    const newRows = generateRandomData(page, size);
    setRows(newRows);
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
          DataGrid
        </Typography>
        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Stack>
      <Collapse in={expanded}>
        <Paper variant="outlined" sx={{ p: 1 }}>
          <DataGridServer
            columns={columns} // request
            rows={rows} // request
            page={page} // request
            rowCount={rowCount} // request
            onPageChange={onPageChange} // request
            height={"400px"} // optional *set default 568px*
            // width={"100%"} // optional *set default 100%*
            checkbox={true} // optional
            selectionModel={selectionModel} // optional but if checkbox === true => request
            setSelectionModel={setSelectionModel} // optional but if checkbox === true => request
          />
        </Paper>
      </Collapse>
    </Box>
  );
};

export default SampleTable;
