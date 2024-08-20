import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

const ButtonLink = (props) => {
  const { children, className, to, ...otherProps } = props;
  return (
    <Link to={to} {...otherProps} className={`button ${className ? className : ""}`}>
      {children}
    </Link>
  );
};

export default ButtonLink;
