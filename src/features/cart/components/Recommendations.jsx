import React from 'react';
import recommendations from '../constants/Recommendations.json';
import ProductStrip from './ProductStrip'
// import ProductCard from './ProductCard';
// import './Recommendations.scss';

const Recommendations = () => {
  return (
    <div className="recommendations">
      {recommendations.map(product => (
        <ProductStrip key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Recommendations;
