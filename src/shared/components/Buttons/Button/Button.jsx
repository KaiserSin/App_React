import React from "react";

import "./Button.scss";

const Button = (props) => {
  const { children, className, ...otherProps } = props;
  return (
    <button {...otherProps} className={`button ${className ? className : ""}`}>
      {children}
    </button>
  );
};

export default Button;
