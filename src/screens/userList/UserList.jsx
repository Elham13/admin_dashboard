import React, { useState } from "react";
import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { userRows } from "../../dummyData";

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              src={params.row.avatar}
              alt={params.row.userName}
              className="userListImg"
            />
            {params.row.userName}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 190,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <i
              className="fas fa-trash-alt userListDelete"
              onClick={() => handleDelete(params.row.id)}
            ></i>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
