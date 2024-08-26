import React from 'react';
// import './CartActions.scss';

const CartActions = () => {
  return (
    <div className="cart-actions">
      <button>Подарки</button>
      <button>Собрать корзину по запросу</button>
      <div className="preliminary-signatures">
        <span>4 товара • 1 недоступен</span>
        <button>Выбрать все</button>
        <button>Удалить</button>
        <button>Заменить недоступные</button>
      </div>
    </div>
  );
};

export default CartActions;
