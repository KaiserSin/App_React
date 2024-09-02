import React from "react";
import "./RenderGrid.scss";
import { Product } from "@shared/components/Product/Product";

const RenderGrid = ({ products }) => {
  const rows = products.reduce((acc, product, index) => {
    const gridIndex = Math.floor(index / 6);
    if (!acc[gridIndex]) acc[gridIndex] = [];
    acc[gridIndex].push(
      <Product
        key={`${product.id}-${index}`}
        id={product.id}
        name={product.name}
        price={product.price}
        oldPrice={product.oldPrice}
        discount={product.discount}
        imageUrl={product.imageUrl}
        rating={product.rating}
        reviews={product.reviews}
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
          name={lastRow[i].props.name}
          price={lastRow[i].props.price}
          oldPrice={lastRow[i].props.oldPrice}
          discount={lastRow[i].props.discount}
          imageUrl={lastRow[i].props.imageUrl}
          rating={lastRow[i].props.rating}
          reviews={lastRow[i].props.reviews}
        />
      );
      i++;
    }
  }

  return rows.map((row, index) => (
    <div key={`itemsgrid-${index}`} className={`w-layout-grid itemsgrid`}>
      {row}
    </div>
  ));
};

export { RenderGrid };
