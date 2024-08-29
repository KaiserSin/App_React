import React from "react";

import "./TextButton.scss";

const TextButton = (props) => {
  const { children, className, ...otherProps } = props;
  return (
    <button {...otherProps} className={`text-button ${className ? className : ""}`}>
      {children}
    </button>
  );
};

export default TextButton;
