import React from "react";
import greenbox from "@assets/images/cartImages/greenbox.svg";
import redtrashbin from "@assets/images/cartImages/redtrashbin.svg";
import razer from "@assets/images/cartImages/razer.svg";
import heart from "@assets/images/cartImages/heart.svg";
import lightning from "@assets/images/cartImages/lightning.svg";
import star from "@assets/images/cartImages/Star.svg";
import selloutImagePath from "@assets/images/cartImages/sellout.svg";
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
      <div className="background-item">
        <div
          className={`cart-items__product ${status.available ? "" : "pale"} ${
            additionalInfo ? "has-additional-info" : ""
          }`}
        >
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
          <div className="place-for-image">
            <img src={image_url} alt={name} className="cart-items__image" />
          </div>
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
                      src={selloutImagePath}
                      alt="Sellout Icon"
                      className="cart-items__sellout"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="cart-items__actions">
              <div className="list-of-actions">
                <img
                  src={heart}
                  alt="Heart Icon"
                  className="cart-items__action-icon"
                />
                <div className="grey-background">
                  <img
                    src={lightning}
                    alt="Heart Icon"
                    className="cart-items__action-icon-lightning"
                  />
                  <button className="cart-items__order-button">Заказать</button>
                </div>
              </div>

              <div className="paragraph-status">
                <p className="cart-items__status">
                  {status.ends
                    ? "Осталось меньше"
                    : status.available
                    ? ""
                    : "Закончился"}
                </p>
              </div>
            </div>
          </div>

          <div className="fourth-column">
            <div className="cart-items__pricing">
              <div className="for-text-background">
                <p
                  className={
                    sellout ? "cart-items__price" : "cart-items__price--green"
                  }
                >
                  {price}
                </p>
              </div>
            </div>

            <div className="new-quantity">
              <div className="cart-items__quantity-rating">
                <button className="cart-items__quantity-btn"> - </button>
                <span>{quantity}</span>
                <button className="cart-items__quantity-btn"> + </button>
              </div>
            </div>

            <div className="rating-number">
              <span className="cart-items__rating">
                <img
                  src={star}
                  alt="Heart Icon"
                  className="cart-items__action-icon-star"
                />
                <span className="rating-card">{rating}</span>
              </span>
            </div>
          </div>
        </div>
        {additionalInfo ? <AdditionalInfo {...additionalInfo} /> : ""}
      </div>
    </>
  );
};
export default CartItem;
