import React from 'react';
import './ProductStrip.scss';
import recommendations from '@features/cart/constants/Recommendations.json';
import toBin from '@assets/images/cartImages/toBin.svg';
import yellowLightning from '@assets/images/cartImages/yellowLightning.svg';

const ProductStrip = () => {
  return (
    <div className="product-card-container">
      {recommendations.map((item) => (
        <div key={item.id} className="product-card">
          <img src={item.image_url} alt={item.name} className="product-card__image" />
          
          <div className="product-card__rating-reviews">
            <span className="product-card__star">⭐</span>
            <span>{item.rating}</span>
            <span className="reviews">{item.reviews}</span>
          </div>

          <div className="product-card__pricing">
            <span className="product-card__price">{item.price}</span>
            <span className="product-card__oldprice">
              <sup>{item.oldprice}</sup>
            </span>
            <span className="product-card__discount">
              <sup className='discount-percentage'>{item.discrount}</sup>
            </span>
          </div>

          <div className="product-card__name">
            {item.name}
          </div>

          <div className="product-card__actions">
           
              <img src={toBin} alt="Add to Cart" />
            
            <img src={yellowLightning} alt="Buy Now" className="product-card__lightning-btn" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductStrip;
