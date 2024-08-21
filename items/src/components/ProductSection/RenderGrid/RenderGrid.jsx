import React from 'react';
import { Product } from '../Product/Product';
import './RenderGrid.scss';

const RenderGrid = ({ products }) => {
  const rows = products.reduce((acc, product, index) => {
    const gridIndex = Math.floor(index / 6);
    if (!acc[gridIndex]) acc[gridIndex] = [];
    acc[gridIndex].push(
      <Product
        key={product.id}
        id={product.id}
        imageUrl={product.image_url}
        currentPrice={product.currentprice}
        oldPrice={product.oldprice}
        text={product.text}
      />
    );
    return acc;
  }, []);

  return rows.map((row, index) => (
    <div
      key={`itemsgrid${index}`}
      className={`w-layout-grid itemsgrid`}
    >
      {row}
    </div>
  ));
};

export { RenderGrid };


