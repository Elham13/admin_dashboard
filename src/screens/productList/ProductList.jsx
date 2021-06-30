import React, { useState } from "react";
import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { productRows } from "../../dummyData";

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              src={params.row.img}
              alt={params.row.name}
              className="userListImg"
            />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 190,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
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
    <div className="productList">
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

export default ProductList;
