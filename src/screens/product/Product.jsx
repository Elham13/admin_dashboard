import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";

const Product = () => {
  return (
    <div className="product">
      <div className="userTitleContainer">
        <h1 className="userTitle">Product</h1>
        <Link to="/newProduct">
          <button className="userAddButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={productData}
            dataKey="name"
            value="Sales"
            title="Sales Performance"
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://images.pexels.com/photos/3644098/pexels-photo-3644098.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="pr"
              className="productInfImg"
            />
            <span className="productName">Apple Airepods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id: </span>
              <span className="productInfoValue">1</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sales: </span>
              <span className="productInfoValue">&#8377;232.9</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Active: </span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">In stock: </span>
              <span className="productInfoValue">132</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airepd" />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://images.pexels.com/photos/3644098/pexels-photo-3644098.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="pdfj"
                className="productUploadImg"
              />
              <label htmlFor="file">
                <i className="fas fa-upload productIcon"></i>
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
