import React from "react";
import Basket from "@assets/images/cartImages/basket.svg";
import "./VerticalNav.scss";

const VerticalNav = () => {
  return (
    <div className="vertical-nav">
      <div className="vertical-nav__icon">
        <img src={Basket} alt="Cart Icon" />
      </div>
      <div className="vertical-nav__icon">
        <img src={Basket} alt="Cart Icon" />
      </div>
      <div className="vertical-nav__icon">
        <img src={Basket} alt="Cart Icon" />
      </div>
      <div className="vertical-nav__plus-container">
        <div className="vertical-nav__plus">+</div>
      </div>
    </div>
  );
};

export default VerticalNav;
