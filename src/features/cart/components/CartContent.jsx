import React from 'react';
import CartActions from './CartActions';
import CartItems from './CartItems';
import './CartContent.scss';

const CartContent = () => {
  return (
    <div className="cart-content">
      <CartActions />
      <CartItems />
    </div>
  );
};

export default CartContent;
