import React from "react";
import crown from "@assets/images/cartImages/crown.svg";
import plane from "@assets/images/cartImages/plane.svg";
import subscription from "@assets/images/cartImages/subscription.svg";
import exclamation from "@assets/images/cartImages/exclamation.svg";
import dolyami from "@assets/images/cartImages/dolyami.svg";
import arrow from "@assets/images/cartImages/arrow.svg";
import trashbin from "@assets/images/cartImages/trashcan.svg";
import "./DeliveryInfo.scss";

const DeliveryInfo = () => {
  return (
    <div className="delivery-info">
      <div className="delivery-info__header">
        <h2 className="delivery-info__title">Ваша корзина</h2>
        <div className="delivery-info__summary">
          <span className="delivery-info__items">4 товара · 1 кг</span>
          <div className="delivery-info__bonus">
            <img
              src={crown}
              alt="Bonus Icon"
              className="delivery-info__bonus-icon"
            />
            <span>150 бонусов в сумме</span>
          </div>
        </div>
      </div>

      <div className="delivery-info__customs-warning">
        <img
          src={plane}
          alt="Plane Icon"
          className="delivery-info__plane-icon"
        />
        <p>
          В корзине есть товары из-за рубежа, при оформлении <br></br>необходимо
          заполнить паспортные данные для таможни
        </p>
      </div>

      <div className="delivery-info__options">
        <div className="division">
          <div className="delivery-info__option">
            <span>
              Доставим <span className="bold-text">29 августа</span> ·
              <span className="translucent-text"> курьером </span>·{" "}
              <span className="bold-text">0Р</span>
            </span>
          </div>
          <div className="delivery-info__option">
            <span>
              <span className="bold-text">29 августа</span> ·{" "}
              <span className="translucent-text">в пункт выдачи</span> · 0Р
            </span>
          </div>
        </div>

        <div className="delivery-info__option">
          <div className="division">
            <span>
              <span className="bold-text">Послезавтра</span> ·{" "}
              <span className="translucent-text">курьером supreme</span>
            </span>

            <img
              src={subscription}
              alt="Subscription Icon"
              className="delivery-info__subscribe-icon"
            />

            <div className="delivery-info__option">
              <span>
                <span className="bold-text">28 августа</span> ·{" "}
                <span className="translucent-text">SwiftMart Speedy</span> ·{" "}
                <span className="bold-text">350Р</span>
              </span>
            </div>
          </div>
        </div>

        <div className="delivery-info__note">
          <img
            src={exclamation}
            alt="Info Icon"
            className="delivery-info__note-icon"
          />
          <span className="delivery-date">
            Выбрать даты, время и способ доставки можно при оформлении заказа
          </span>
        </div>
      </div>

      <div className="delivery-info__promo">
        <input
          type="text"
          className="delivery-info__promo-input"
          placeholder="Промокод"
        />
        <button className="delivery-info__promo-button">Применить</button>
      </div>

      <div className="delivery-info__discounts">
        <div className="delivery-info__discount">
          <span className="disscount">Скидка · </span>
          <span className="delivery-info__discount-amount">-291₽</span>
          <sup className="delivery-info__sup">с supreme · -592₽</sup>
        </div>
        <div className="delivery-info__bonus">
          <span className="disscount">Бонусы · </span>
          <span className="delivery-info__bonus-amount"> 150₽</span>
          <sup className="delivery-info__sup">с supreme · 550₽</sup>
        </div>
      </div>

      <div className="delivery-info__payment">
        <div>
          <img
            src={dolyami}
            alt="Payment Icon"
            className="delivery-info__payment-icon"
          />
          <span className="delivery-info__payment-text">
            4 платежа по 1 000 ₽
          </span>
        </div>
        <img
          src={arrow}
          alt="Arrow Icon"
          className="delivery-info__arrow-icon"
        />
      </div>

      <div className="delivery-info__checkout">
        <button className="delivery-info__checkout-button">
          Перейти к оформлению
        </button>
        <button className="delivery-info__trashcan-button">
          <img
            src={trashbin}
            alt="Trashcan Icon"
            className="delivery-info__trashcan-icon"
          />
        </button>
      </div>

      <button className="delivery-info__schedule-button">
        Покупка по расписанию
      </button>

      <div className="delivery-info__message">
        <img
          src={exclamation}
          alt="Exclamation Icon"
          className="delivery-info__message-icon"
        />
        <p className="delivery-info__message-text">
          Вы можете настроить расписание для автоматических покупок товаров. Для
          этого положите необходимые товары в корзину, привяжите карту или
          пополните баланс личного кабинета, а затем нажмите кнопку выше.
        </p>
      </div>
    </div>
  );
};

export default DeliveryInfo;
