import React from "react";
import pen from "@assets/images/cartImages/pen.svg";
import collect from "@assets/images/cartImages/collect.svg";
import share from "@assets/images/cartImages/share.svg";
import greenbox from "@assets/images/cartImages/greenbox.svg";
import redtrashbin from "@assets/images/cartImages/redtrashbin.svg";
import change from "@assets/images/cartImages/change.svg";
import "./CartActions.scss";

const CartActions = () => {
  return (
    <div className="cart-actions">
      <div className="cart-actions__row cart-actions__row--top">
        <div className="cart-actions__side cart-actions__side--left">
          <div className="presents">
            <img src={pen} alt="Pen Icon" className="cart-actions__icon" />
            <span className="cart-actions__text">Подарки</span>
          </div>
          <div className="image-icon">
            <img
              src={collect}
              alt="Collect Icon"
              className="cart-actions__icon-collect"
            />
          </div>
        </div>
        <div className="cart-actions__side cart-actions__side--right">
          <img src={share} alt="Share Icon" className="cart-actions__icon" />
          <span className="cart-actions__text">Поделиться</span>
        </div>
      </div>

      <div className="cart-actions__row cart-actions__row--middle">
        <span className="cart-actions__count">
          4 товара ·{" "}
          <span className="cart-actions__unavailable">1 недоступен</span>
        </span>
      </div>

      <div className="cart-actions__row cart-actions__row--bottom">
        <div className="cart-actions__action">
          <img
            src={greenbox}
            alt="Select All Icon"
            className="cart-actions__icon"
          />
          <span className="cart-actions__text">Выбрать все</span>
        </div>
        <div className="cart-actions__action">
          <img
            src={redtrashbin}
            alt="Delete Icon"
            className="cart-actions__icon"
          />
          <span className="cart-actions__text">Удалить</span>
        </div>
        <div className="cart-actions__action">
          <img src={change} alt="Replace Icon" className="cart-actions__icon" />
          <span className="cart-actions__text">Заменить недоступные</span>
        </div>
      </div>
    </div>
  );
};

export default CartActions;
