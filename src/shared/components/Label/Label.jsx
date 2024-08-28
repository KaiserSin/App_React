import React from "react";

import "./Label.scss";

const Label = (props) => {
  const { color, children, className } = props;
  return (
    <div className={`label ${className ? className : ""} ${color ? `label--color--${color}` : ""}`}>{children}</div>
  );
};

export default Label;
