import React from "react";
import {
  Typography,
  Pagination,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { DataGrid, GridColDef, GridSortModel } from "@mui/x-data-grid";

type DatagridServerProps = {
  columns: GridColDef[];
  rows: any[];
  page: { currentPage: number; pageSize: number; field: any; sort: any };
  rowCount: number;
  onPageChange: (
    currentPage: number,
    pageSize: number,
    field: string,
    sort: string
  ) => void;
  height?: string;
  width?: string;
  checkbox?: boolean;
  selectionModel?: any[];
  setSelectionModel?: React.Dispatch<React.SetStateAction<any[]>>;
};

const DataGridServer: React.FC<DatagridServerProps> = ({
  columns = [],
  rows = [],
  page,
  rowCount,
  onPageChange,
  height = "568px",
  width = "100%",
  checkbox = false,
  selectionModel,
  setSelectionModel,
}) => {
  const handleChangePage = async (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    if (setSelectionModel) {
      setSelectionModel([]);
    }
    onPageChange(newPage, page.pageSize, page.field, page.sort);
  };

  const handleRowsPerPageChange = async (event: SelectChangeEvent<number>) => {
    if (setSelectionModel) {
      setSelectionModel([]);
    }
    onPageChange(1, Number(event.target.value), page.field, page.sort);
  };

  const handleSortModelChange = async (model: GridSortModel) => {
    if (model.length > 0) {
      const [{ field, sort }] = model;
      onPageChange(page.currentPage, page.pageSize, field ?? "", sort ?? "");
    } else {
      onPageChange(page.currentPage, page.pageSize, "", "");
    }
  };

  const startItem = (page.currentPage - 1) * page.pageSize + 1;
  const endItem = Math.min(page.currentPage * page.pageSize, rowCount);

  return (
    <Stack sx={{ width: width, height: height }}>
      <DataGrid
        columns={columns}
        rows={rows}
        rowCount={rowCount}
        className="custom-data-grid"
        sx={{ borderRadius: "12px" }}
        paginationMode="server"
        hideFooter
        checkboxSelection={checkbox}
        onSortModelChange={handleSortModelChange}
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={(params) => {
          if (setSelectionModel) {
            setSelectionModel([...params]);
          }
        }}
      />
      <Stack
        direction="row-reverse"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Pagination
          count={Math.ceil(rowCount / page.pageSize)}
          page={page.currentPage}
          onChange={handleChangePage}
          shape="rounded"
          sx={{ marginTop: 2, display: "flex", justifyContent: "center" }}
          color="primary"
        />

        <FormControl variant="outlined" sx={{ marginTop: 2 }}>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" color="gray">
              Show
            </Typography>
            <Select
              labelId="rows-per-page-label"
              value={page.pageSize}
              onChange={handleRowsPerPageChange}
              size="small"
              sx={{ width: "80px" }}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
            </Select>
            <Typography variant="body2" color="gray">
              {startItem}-{endItem} of {rowCount} items
            </Typography>
          </Stack>
        </FormControl>
      </Stack>
    </Stack>
  );
};

export default DataGridServer;
