import React from "react";

import "./ProductVariant.scss";

const ProductVariant = (props) => {
  const { isDisabled, children, className } = props;
  return (
    <button className={`product-variant ${isDisabled ? "product-variant--disabled" : ""}  ${className ? className : ""}`}>
      {children}
    </button>
  );
};

export default ProductVariant;
