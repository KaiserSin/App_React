import React from "react";
import "./ProductStrip.scss";
import recommendations from "@shared/composables/constants/productStrip.json";
import { Product } from "../Product/Product";

const ProductStrip = ({}) => {
  return (
    <div className="product-card-container">
      {recommendations.map((item, index) => (
        <Product {...item} key={index} />
      ))}
    </div>
  );
};

export default ProductStrip;
