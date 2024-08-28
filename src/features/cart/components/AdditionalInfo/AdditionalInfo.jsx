import React from "react";
import crown from "@assets/images/cartImages/crown.svg";
import plane from "@assets/images/cartImages/plane.svg";
import searching from "@assets/images/cartImages/search.svg";
import refresh from "@assets/images/cartImages/refresh.svg";
import "./AdditionalInfo.scss";

export const AdditionalInfo = ({ bonus, abroad, search, change }) => {
  return (
    <div className="additional-info">
      {bonus ? (
        <div className="additional-info__flex">
          <img src={crown} alt="Select Icon" className="cart-items__icon" />
          <span className="commodity-text">
            Начислим {bonus} бонусов магазина
          </span>
        </div>
      ) : (
        ""
      )}
      {abroad ? (
        <div className="">
          <img src={plane} alt="Delete Icon" className="cart-items__icon" />
          <span className="commodity-text">Товар из-за рубежа</span>
        </div>
      ) : (
        ""
      )}
      {search ? (
        <div className="">
          <img
            src={searching}
            alt="Select Icon"
            className="cart-items__icon1"
          />
          <span className="commodity-text">Найти такой же / аналогичный</span>
        </div>
      ) : (
        ""
      )}
      {change ? (
        <div className="">
          <img src={refresh} alt="Delete Icon" className="cart-items__icon" />
          <span className="commodity-text">Заменить автоматически</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
