import React from "react";
import "./user.css";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit user</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>

      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/7286193/pexels-photo-7286193.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="user"
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Baker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <i className="far fa-user userShowIcon"></i>
              <span className="userShowInfoTitle">annabek99</span>
            </div>
            <div className="userShowInfo">
              <i className="far fa-calendar userShowIcon"></i>
              <span className="userShowInfoTitle">12-01-1990</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <i className="fas fa-phone-alt userShowIcon"></i>
              <span className="userShowInfoTitle">+02392943405</span>
            </div>
            <div className="userShowInfo">
              <i className="far fa-envelope userShowIcon"></i>
              <span className="userShowInfoTitle">anna@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <i className="fas fa-map-marker-alt userShowIcon"></i>
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  placeholder="annabek99"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Baker"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label htmlFor="">Title</label>
                <input
                  type="text"
                  placeholder="Software Engineer"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder="anna@gmail.com"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  placeholder="+02392943405"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://images.pexels.com/photos/7286193/pexels-photo-7286193.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="userupdat"
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <i className="fas fa-upload userUpdateIcon"></i>
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Edit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
