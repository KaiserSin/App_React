import React from "react";
import greenbox from "@assets/images/cartImages/greenbox.svg";
import redtrashbin from "@assets/images/cartImages/redtrashbin.svg";
import plane from "@assets/images/cartImages/plane.svg";
import razer from "@assets/images/cartImages/razer.svg";
import heart from "@assets/images/cartImages/heart.svg";
import lightning from "@assets/images/cartImages/lightning.svg";
import "./CartItem.scss";
import { AdditionalInfo } from "../AdditionalInfo/AdditionalInfo";

const CartItem = ({
  name,
  price,
  status,
  quantity,
  image_url,
  rating,
  brend,
  sellout,
  additionalInfo,
}) => {
  return (
    <>
      <div>
        <div className="cart-items__product">
          <div className="cart-items__controls">
            <img
              src={greenbox}
              alt="Select Icon"
              className="cart-items__icon"
            />
            <img
              src={redtrashbin}
              alt="Delete Icon"
              className="cart-items__icon"
            />
          </div>
          <img src={image_url} alt={name} className="cart-items__image" />
          <div className="third-column">
            <div className="cart-items__details">
              <div className="cart-items__info">
                <h3 className="cart-items__name">{name}</h3>
                <p className="cart-items__subtitle">Топ пингвин</p>
                <div className="brend-sellout">
                  {brend && (
                    <img
                      src={razer}
                      alt="Razer Logo"
                      className="cart-items__brend"
                    />
                  )}
                  {sellout && (
                    <img
                      src={sellout}
                      alt="Sellout Icon"
                      className="cart-items__sellout"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="cart-items__actions">
              <div>
                <img
                  src={heart}
                  alt="Heart Icon"
                  className="cart-items__action-icon"
                />

                <img
                  src={lightning}
                  alt="Heart Icon"
                  className="cart-items__action-icon"
                />
                <button className="cart-items__order-button">Заказать</button>
              </div>

              <div className="paragraph-status">
                <p className="cart-items__status">
                  {status.ends
                    ? "Заканчивается"
                    : status.available
                    ? ""
                    : "Нет в наличии"}
                </p>
              </div>
            </div>
          </div>

          <div className="fourth-column">
            <div className="cart-items__pricing">
              <p className="cart-items__price">{price}</p>
            </div>

            <div className="cart-items__quantity-rating">
              <button className="cart-items__quantity-btn"> - </button>
              <span>{quantity}</span>
              <button className="cart-items__quantity-btn"> + </button>
            </div>

            <div>
              <span className="cart-items__rating">⭐{rating}</span>
            </div>
          </div>
        </div>
        {additionalInfo ? <AdditionalInfo {...additionalInfo} /> : ""}
      </div>
    </>
  );
};
export default CartItem;
