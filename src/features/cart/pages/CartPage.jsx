import React from "react";
import VerticalNav from "@features/cart/components/VerticalNav/VerticalNav";
import CartContent from "@features/cart/components/CartContent/CartContent";
import DeliveryInfo from "@features/cart/components/DeliveryInfo/DeliveryInfo";
import ArtificialText from "@features/cart/components/ArtificialText/ArtificialText";
import ProductStrip from "@shared/components/ProductStrip/ProductStrip";
import ScrollToBottom from "../../../features/market/components/ScrollToBottom/ScrollToBottom";
import SwiftMartAIBlock from "@shared/components/SwiftMartAIBlock/SwiftMartAIBlock";
import "./CartPage.scss";

const CartPage = () => {
  return (
    <div className="cart-full-page">
      <div className="cart-page">
        <h1 className="cart-page__title">Корзина</h1>
        <div className="cart-page__grid">
          <VerticalNav />
          <CartContent />
          <div className="cart-page__side">
            <DeliveryInfo />
            {/* <ArtificialText /> */}
            <SwiftMartAIBlock
              title="Сводка от GPT"
              classes={{ root: "cart-ai-block" }}
            >
              Компьютерная мышь в корзине, на первый взгляд, выглядит неплохо,
              но имеет ряд недостатков, например некачественный кабель, что
              делает её недолговечной. Предлагаю рассмотреть этот вариант:
              <span className="mouse-mamba">
                Компьютерная мышь Razer Mamba Elite
              </span>
            </SwiftMartAIBlock>
          </div>
        </div>
      </div>
      <div className="recommendations">
        <ProductStrip />
        <ProductStrip />
      </div>
      <ScrollToBottom />
    </div>
  );
};

export default CartPage;
