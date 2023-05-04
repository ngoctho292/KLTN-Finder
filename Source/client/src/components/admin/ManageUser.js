import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "firstName", headerName: "First name", width: 160 },
  { field: "lastName", headerName: "Last name", width: 160 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
const ManageUser = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl w-full">Manage account</h2>
      <div className="mb-4 flex justify-between w-full">
        <div>
          <InputBase
            sx={{
              mt: "20px",
              height: 40,
              border: 1,
              borderColor: "#D9D9D9",
              borderRadius: "5px",
              pl: 1,
              pr: 1,
            }}
            placeholder="Search user ..."
          />
          <button className="bg-[#3778DA] h-10 w-[120px] mt-5 ml-5 rounded-md text-white">
            <SearchIcon />
            Search
          </button>
        </div>
        <div>
          <button className="bg-[#3778DA] h-10 w-[120px] mt-5 mr-5 rounded-md text-white">
            Add user
          </button>
          <button className="bg-[#24AB62] h-10 w-[120px] mt-5 mr-5 rounded-md text-white">
            Update user
          </button>
          <button className="bg-[#E14444] h-10 w-[120px] mt-5 rounded-md text-white">
            Delete user
          </button>
        </div>
      </div>
      <div className="w-full">
        <DataGrid
          rows={rows}
          columns={columns}
          paginationModel={{ page: 0, pageSize: 5 }}
          checkboxSelection
          className="w-full"
        />
      </div>
    </div>
  );
};

export default ManageUser;
