import React from "react";
import VerticalNav from "@features/cart/components/VerticalNav/VerticalNav";
import CartContent from "@features/cart/components/CartContent/CartContent";
import DeliveryInfo from "@features/cart/components/DeliveryInfo/DeliveryInfo";
import ArtificialText from "@features/cart/components/ArtificialText/ArtificialText";
import ProductStrip from "@shared/components/ProductStrip/ProductStrip";
import ScrollToBottom from "../../../features/market/components/ScrollToBottom/ScrollToBottom";
import "./CartPage.scss";

const CartPage = () => {
  return (
    <>
      <div className="cart-page">
        <h1 className="cart-page__title">Корзина</h1>
        <div className="cart-page__grid">
          <VerticalNav />
          <CartContent />
          <div className="cart-page__side">
            <DeliveryInfo />
            <ArtificialText />
          </div>
        </div>
      </div>
      <div className="recommendations">
        <ProductStrip />
        <ProductStrip />
      </div>
      <ScrollToBottom />
    </>
  );
};

export default CartPage;
