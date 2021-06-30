import React from "react";
import "./featuredInfo.css";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">&#8377; 2,018,3</span>
          <span className="featuredMoneyRate">
            -11.32 <i className="fas fa-arrow-down featuredIcon negative"></i>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">&#8377; 2,323</span>
          <span className="featuredMoneyRate">
            -1.3 <i className="fas fa-arrow-down featuredIcon negative"></i>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">&#8377; 2,03</span>
          <span className="featuredMoneyRate">
            +2 <i className="fas fa-arrow-up featuredIcon"></i>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
