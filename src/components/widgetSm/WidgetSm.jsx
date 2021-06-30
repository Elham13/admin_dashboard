import React from "react";
import "./widgetsm.css";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New joined members</span>
      <ul className="widgetSmList">
        <li className="widgetSmItem">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="imagde"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna keller</span>
            <span className="widgetSmUserTitle">Software Enginer</span>
          </div>
          <button className="widgetSmButton">
            <i className="fas fa-eye widgetSmIcon"></i>
            Display
          </button>
        </li>
        <li className="widgetSmItem">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="imagde"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna keller</span>
            <span className="widgetSmUserTitle">Software Enginer</span>
          </div>
          <button className="widgetSmButton">
            <i className="fas fa-eye widgetSmIcon"></i>
            Display
          </button>
        </li>
        <li className="widgetSmItem">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="imagde"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna keller</span>
            <span className="widgetSmUserTitle">Software Enginer</span>
          </div>
          <button className="widgetSmButton">
            <i className="fas fa-eye widgetSmIcon"></i>
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
