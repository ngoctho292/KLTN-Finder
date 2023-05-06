import React, { useEffect, useMemo, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { Box, Modal, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 600,
  boxShadow: 24,
};
const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [keytable, setKeytable] = useState(0);
  useEffect(() => {
    const getUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get("http://localhost:5000/api/v1/user/info", config);
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  },[])
  const columns = useMemo(() => [
    { field: "displayName", headerName: "Display Name", width: 200 },
    { field: "username", headerName: "Username", width: 200 },
    { field: "roles", headerName: "Role", width: 200 },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 250,
      
    },
    { field: "id", headerName: "Id", width: 220 },
  ]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onSelectHandle = (ids) => {
    const selectRowData = ids.map(id => users.find(row => row.id === id))
    console.log(selectRowData)
  }
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
          <button
            className="bg-[#3778DA] h-10 w-[120px] mt-5 mr-5 rounded-md text-white"
            onClick={handleOpen}
          >
            Add user
          </button>
          <button className="bg-[#24AB62] h-10 w-[120px] mt-5 mr-5 rounded-md text-white">
            Update user
          </button>
          <button className="bg-[#E14444] h-10 w-[120px] mt-5 rounded-md text-white">
            Delete user
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={style}>
              <ModalAddUser setKeytable={setKeytable} onClose={handleClose} />
            </Box>
          </Modal>
        </div>
      </div>
      <div className="w-full">
        <DataGrid
          key={keytable}
          columns={columns}
          rows={users}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          onRowSelectionModelChange={ids => onSelectHandle(ids)}
        />
      </div>
    </div>
  );
};

export default ManageUser;


export const ModalAddUser = ({ onClose }) => {
  const [keytable, setKeytable] = useState(0);

  const [username, setUsername] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState();
  const [displayName, setDisplayName] = useState();

  const onAddUser = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/v1/user/signup", {
        username,
        password,
        confirmPassword,
        displayName,
      });
      console.log(res);
      if (res.status === 201) {
        console.log(res.statusText);
      }
    } catch (error) {
      console.log(error);
    }
    onClose();
    setKeytable(keytable + 1);
  };
  const onChangeUsername = (event) => {
    const value = event.target.value;
    setUsername(value);
  };
  const onChangePass = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const onChangeConfirmPass = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };
  const onChangeDisplayName = (event) => {
    const value = event.target.value;
    setDisplayName(value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onAddUser();
    }
  };
  return (
    <div className="bg-[#1E1E1E] h-full flex items-center justify-center flex-col text-white">
      <div className="flex flex-col text-white mt-8">
        <h3 className="text-xl font-semibold">Add user</h3>
        <input
          type="text"
          className="w-[374px] h-12 mt-3 rounded-md p-3 bg-[#31343E] text-[#C8C9CB]"
          placeholder="Emai hoặc số điện thoại..."
          onChange={onChangeUsername}
          onKeyPress={handleKeyPress}
        />
        <input
          type="text"
          className="w-[374px] h-12 mt-3 rounded-md p-3 bg-[#31343E] text-[#C8C9CB]"
          placeholder="Nhập tên hiển thị"
          onChange={onChangeDisplayName}
          onKeyPress={handleKeyPress}
        />

        <input
          type="password"
          className="w-[374px] h-12 mt-3 rounded-md p-3 bg-[#31343E] text-[#C8C9CB] "
          placeholder="Mật khẩu"
          onChange={onChangePass}
          onKeyPress={handleKeyPress}
        />
        <input
          type="password"
          className="w-[374px] h-12 mt-3 rounded-md p-3 bg-[#31343E] text-[#C8C9CB]"
          placeholder="Nhập lại mật khẩu"
          onChange={onChangeConfirmPass}
          onKeyPress={handleKeyPress}
        />
        <button
          className="bg-[#037AEB] h-12 w-[374px] mt-5 rounded-md p-3 font-semibold "
          onClick={onAddUser}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

