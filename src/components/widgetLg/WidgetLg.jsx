import React from "react";
import "./widgetlg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Data</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/3204421/pexels-photo-3204421.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="lg"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan carol</span>
            </td>
            <td className="widgetLgDate">2 June 2021</td>
            <td className="widgetLgAmt">&#8377; 20.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/3204421/pexels-photo-3204421.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="lg"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan carol</span>
            </td>
            <td className="widgetLgDate">2 June 2021</td>
            <td className="widgetLgAmt">&#8377; 20.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/3204421/pexels-photo-3204421.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="lg"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan carol</span>
            </td>
            <td className="widgetLgDate">2 June 2021</td>
            <td className="widgetLgAmt">&#8377; 20.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
