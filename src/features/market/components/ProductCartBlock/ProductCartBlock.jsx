import React from "react";

import { useGetProductQuery } from "@/redux/reducers/marketApi";
import TextButton from "@shared/components/Buttons/TextButton/TextButton";
import Button from "@shared/components/Buttons/Button/Button";
import InstallmentPlan from "@shared/components/InstallmentPlan/InstallmentPlan";
import Dolyami from "@shared/components/Dolyami/Dolyami";
import DeliveryBlock from "@shared/components/DeliveryBlock/DeliveryBlock";
import SwiftMartAIBlock from "@shared/components/SwiftMartAIBlock/SwiftMartAIBlock";
import Label from "@shared/components/Label/Label";

import "./ProductCartBlock.scss";

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
            <sup>
              <Label color="gray" className="product-section-cart__price-trend">
                <div className="product-section-cart__polygon">
                  <svg width="10" height="10" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.13398 0.499999C2.51888 -0.166667 3.48113 -0.166667 3.86603 0.5L5.59808 3.5C5.98298 4.16667 5.50185 5 4.73205 5H1.26795C0.498148 5 0.0170237 4.16667 0.401924 3.5L2.13398 0.499999Z"
                      fill="#DA0000"
                    />
                  </svg>
                </div>
                <div className="">Подорожало</div>
              </Label>
            </sup>
          </div>
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
