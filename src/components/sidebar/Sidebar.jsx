import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link className="link" to="/">
              <li className="sidebarListItem active">
                <i className="fas fa-igloo sidebarIcon"></i>
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <i className="fas fa-chart-line sidebarIcon"></i>
              Analytics
            </li>
            <li className="sidebarListItem">
              <i className="fas fa-award sidebarIcon"></i>
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link className="link" to="/users">
              <li className="sidebarListItem ">
                <i className="fas fa-users sidebarIcon"></i>
                Users
              </li>
            </Link>
            <Link className="link" to="/products">
              <li className="sidebarListItem">
                <i className="fab fa-algolia sidebarIcon"></i>
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <i className="fas fa-dollar-sign sidebarIcon"></i>
              Transactions
            </li>
            <li className="sidebarListItem">
              <i className="fas fa-clipboard-check sidebarIcon"></i>
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <i className="fas fa-envelope sidebarIcon"></i>
              Mail
            </li>
            <li className="sidebarListItem">
              <i className="fas fa-chalkboard-teacher sidebarIcon"></i>
              Feedback
            </li>
            <li className="sidebarListItem">
              <i className="fas fa-comment-alt sidebarIcon"></i>
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <i className="fas fa-briefcase sidebarIcon"></i>
              Manage
            </li>
            <li className="sidebarListItem">
              <i className="fas fa-chart-line sidebarIcon"></i>
              Analytics
            </li>
            <li className="sidebarListItem">
              <i className="fas fa-exclamation-circle sidebarIcon"></i>
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
