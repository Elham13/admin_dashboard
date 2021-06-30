import React from "react";
import "./topbar.css";
// import { NotificationsNoneIcon, Language, Settings } from "@material-ui/icons";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">gms</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <i className="far fa-bell" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            {/* <Language /> */}
            <i className="fas fa-globe"></i>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <i className="fas fa-cog"></i>
            {/* <Settings /> */}
          </div>
          <img
            src="https://images.pexels.com/photos/1435612/pexels-photo-1435612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="phot"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
