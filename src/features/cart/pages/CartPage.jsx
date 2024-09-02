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
              Бесшумные кнопки мыши делают ее использование более комфортным во
              время длительных игровых сессий. Горизонтальная прокрутка
              позволяет быстро и легко перемещаться по веб-страницам или
              документам.Мышь PB1P оснащена подсветкой, которая придает ей
              уникальный и красочный световой эффект. Подсветка делает мышь
              более заметной в условиях низкой освещенности и добавляет элемент
              стиля в игровой процесс.
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
