import React from "react";

import "./Button.scss";

const Button = (props) => {
  const { children, className, color, ...otherProps } = props;
  return (
    <button {...otherProps} className={`button ${className ? className : ""} button--color--${color}`}>
      {children}
    </button>
  );
};

export default Button;
