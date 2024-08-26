import React from 'react';
import cartItems from '@features/cart/constants/CartItems.json';
// import './CartItems.scss';

const CartItems = () => {
  return (
    <div className="cart-items">
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <p>{item.status}</p>
            <p>{item.rating} / 5 stars ({item.reviews} reviews)</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
