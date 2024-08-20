import React from "react";
import { Link } from "react-router-dom";

import "./Logo.scss";

const Logo = (props) => {
  const { className } = props;

  return (
    <Link to={"/"} className={`logo ${className ? className : ""}`}>
      <img
        className="logo__img"
        src="https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ab8f6f361b16ce4b4b569d_Frame%2035.svg"
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
