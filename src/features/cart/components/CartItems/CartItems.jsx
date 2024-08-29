import React from "react";
import cartItems from "@features/cart/constants/CartItems.json";
import greenbox from "@assets/images/cartImages/greenbox.svg";
import redtrashbin from "@assets/images/cartImages/redtrashbin.svg";
import crown from "@assets/images/cartImages/crown.svg";
import plane from "@assets/images/cartImages/plane.svg";
import razer from "@assets/images/cartImages/razer.svg";
import sellout from "@assets/images/cartImages/sellout.svg";
import heart from "@assets/images/cartImages/heart.svg";
import lightning from "@assets/images/cartImages/lightning.svg";
import search from "@assets/images/cartImages/search.svg";
import refresh from "@assets/images/cartImages/refresh.svg";
import CartItem from "../CartItem/CartItem";

import "./CartItems.scss";

const CartItems = () => {
  return (
    <>
      <div className="cart-items">
        <div className="cart-items__column">
          {cartItems.map((item, index) => (
            <CartItem {...item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CartItems;
