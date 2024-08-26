import React from 'react';
import crown from '@assets/images/cartImages/crown.svg'; 
import './DeliveryInfo.scss';

const DeliveryInfo = () => {
  return (
    <div className="delivery-info">
      <div className="delivery-info__header">
        <h2 className="delivery-info__title">Ваша корзина</h2>
        <div className="delivery-info__summary">
          <span className="delivery-info__items">4 товара · 1 кг</span>
          <div className="delivery-info__bonus">
            <img src={crown} alt="Bonus Icon" className="delivery-info__bonus-icon" />
            <span>150 бонусов в сумме</span>
          </div>
        </div>
      </div>

      <div className="delivery-info__customs-warning">
        <p>В корзине есть товары из-за рубежа, при оформлении необходимо заполнить паспортные данные для таможни</p>
      </div>

      <div className="delivery-info__options">
        <div className="delivery-info__option">
          <span>Доставим 29 августа · курьером · 0Р</span>
        </div>
        <div className="delivery-info__option">
          <span>29 августа · в пункт выдачи · 0Р</span>
        </div>
        <div className="delivery-info__option">
          <span>Послезавтра · курьером supreme · Оформить подписку</span>
        </div>
        <div className="delivery-info__option">
          <span>28 августа · SwiftMart Speedy · 350Р</span>
        </div>
      </div>

      <div className="delivery-info__promo">
        <input type="text" placeholder="Промокод" />
        <button>Применить</button>
      </div>

      <div className="delivery-info__discounts">
        <span className="delivery-info__discount">Скидка · -291Р</span>
        <span className="delivery-info__bonus-text">Бонусы · 150</span>
      </div>

      <div className="delivery-info__payment">
        <span>Долями · 4 платежа по 1 000 Р</span>
      </div>

      <div className="delivery-info__checkout">
        <button>Перейти к оформлению</button>
        <button className="delivery-info__schedule">Покупка по расписанию</button>
      </div>

      <div className="delivery-info__note">
        <p>Вы можете настроить расписание для автоматических покупок товаров. Для этого положите необходимые товары в корзину, привяжите карту или пополните баланс личного кабинета, а затем нажмите кнопку выше.</p>
      </div>
    </div>
  );
};

export default DeliveryInfo;



