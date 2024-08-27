import React from 'react';
import CartHeader from '@features/cart/components/CartHeader';
import VerticalNav from '@features/cart/components/VerticalNav';
import CartContent from '@features/cart/components/CartContent';
import DeliveryInfo from '@features/cart/components/DeliveryInfo';
import ArtificialText from '@features/cart/components/ArtificialText';
import ProductStrip from '@features/cart/components/ProductStrip';
import ScrollToBottom from "../../../features/market/components/ScrollToBottom/ScrollToBottom";
import './CartPage.scss';

const CartPage = () => {
  return (
    <>
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
       </div>
      <div className='recommendations'>
        <ProductStrip />
        <ProductStrip />
      </div>
      <ScrollToBottom />  
    </>
  );
};

export default CartPage;




