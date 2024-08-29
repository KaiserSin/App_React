import React from "react";
import cartItems from "@features/cart/constants/CartItems.json";
import CartItem from "../CartItem/CartItem";

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
