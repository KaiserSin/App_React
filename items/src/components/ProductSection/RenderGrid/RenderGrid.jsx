import React from 'react';
import { Product } from '../Product/Product';
import './RenderGrid.scss';

const RenderGrid = ({ products }) => {
  const rows = products.reduce((acc, product, index) => {
    const gridIndex = Math.floor(index / 6);
    if (!acc[gridIndex]) acc[gridIndex] = [];
    acc[gridIndex].push(
      <Product
        key={`${product.id}-${index}`}  
        id={product.id}
        imageUrl={product.imageUrl} 
        currentPrice={product.cost} 
        oldPrice={product.oldCost} 
        text={product.name} 
      />
    );
    return acc;
  }, []);

  
  const lastRow = rows[rows.length - 1];
  if (lastRow && lastRow.length < 6) {
    let i = 0;
    while (lastRow.length < 6) {
      lastRow.push(
        <Product
          key={`${lastRow[i].props.id}-duplicate-${i}`}  
          id={`${lastRow[i].props.id}-duplicate`}
          imageUrl={lastRow[i].props.imageUrl} 
          currentPrice={lastRow[i].props.currentPrice} 
          oldPrice={lastRow[i].props.oldPrice} 
          text={lastRow[i].props.text} 
        />
      );
      i++;
    }
  }

  return rows.map((row, index) => (
    <div
      key={`itemsgrid-${index}`}  
      className={`w-layout-grid itemsgrid`}
    >
      {row}
    </div>
  ));
};

export { RenderGrid };


