import React from "react";

import { useGetProductQuery } from "@/redux/reducers/marketApi";
import TextButton from "@shared/components/Buttons/TextButton/TextButton";
import Button from "@shared/components/Buttons/Button/Button";
import InstallmentPlan from "@shared/components/InstallmentPlan/InstallmentPlan";
import Dolyami from "@shared/components/Dolyami/Dolyami";
import DeliveryBlock from "@shared/components/DeliveryBlock/DeliveryBlock";
import "./ProductCartBlock.scss";
import SwiftMartAIBlock from "@shared/components/SwiftMartAIBlock/SwiftMartAIBlock";

const ProductCartBlock = () => {
  const { data } = useGetProductQuery();

  return (
    <div className="product-section-cart">
      <div className="product-section-cart__to-cart-menu">
        <header className="product-section-cart__header">
          <div className="product-section-cart-price">
            <div className="product-section-cart__cost">{data?.cost}</div>
            <div className="product-section-cart-price__text">
              <div className="product-section-cart__title">Стоимость товара</div>
              <TextButton className="product-section-cart__cost-history">История цен {">"}</TextButton>
            </div>
          </div>
          <div className="product-section-cart__"></div>
        </header>
        <div className="product-section-cart__body">
          <DeliveryBlock classes={{ root: "product-section-cart__delivery" }} />
          <div className="product-section-cart__buttons">
            <InstallmentPlan classes={{ root: "product-section-cart__installment-plan" }} />
            <Dolyami classes={{ root: "product-section-cart__dolyami" }}>4 платежа по 1 000 ₽</Dolyami>
            <Button color="yellow">Добавить в корзину</Button>
            <Button color="gray">Быстрый заказ</Button>
            <Button className="product-section-cart__like" color="gray">
              <img src="/product-page-images/heart.svg" alt="" />
            </Button>
          </div>
        </div>
      </div>
      <SwiftMartAIBlock title="Сводка от GPT" classes={{ root: "product-section-cart__ai-block" }}>
        Бесшумные кнопки мыши делают ее использование более комфортным во время длительных игровых сессий.
        Горизонтальная прокрутка позволяет быстро и легко перемещаться по веб-страницам или документам.Мышь PB1P
        оснащена подсветкой, которая придает ей уникальный и красочный световой эффект. Подсветка делает мышь более
        заметной в условиях низкой освещенности и добавляет элемент стиля в игровой процесс.
      </SwiftMartAIBlock>
    </div>
  );
};

export default ProductCartBlock;
