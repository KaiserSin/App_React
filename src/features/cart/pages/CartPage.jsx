import React from 'react';
import CartHeader from '@features/cart/components/CartHeader';
import VerticalNav from '@features/cart/components/VerticalNav';
import CartContent from '@features/cart/components/CartContent';
import DeliveryInfo from '@features/cart/components/DeliveryInfo';
import ArtificialText from '@features/cart/components/ArtificialText';
import Recommendations from '@features/cart/components/Recommendations';
import './CartPage.scss';

const CartPage = () => {
  return (
    <div className="cart-page">
      <CartHeader />
      <div className="cart-page__grid">
        <VerticalNav />
        <CartContent />
        <div className="cart-page__side">
          <DeliveryInfo />
          <ArtificialText />
        </div>
      </div>
      <Recommendations />
    </div>
  );
};

export default CartPage;




