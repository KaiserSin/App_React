import React from "react";
import { createPortal } from "react-dom";
import "./ClickAwayListener.scss";

const ClickAwayListener = (props) => {
  const { onClick } = props;

  const html = <div onClick={onClick} className="click-away-listener"></div>;

  return createPortal(html, document.querySelector("#root"));
};

export default ClickAwayListener;
