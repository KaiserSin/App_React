import React from 'react';
// import './ProductCard.scss';

const ProductStrip = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div>
        <h4>{product.name}</h4>
        <p>{product.price}</p>
        <p>{product.rating} / 5 stars</p>
      </div>
    </div>
  );
};

export default ProductStrip;
