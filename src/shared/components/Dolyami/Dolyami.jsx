import React from "react";
import { Link } from "react-router-dom";
import "./Dolyami.scss";

const Dolyami = (props) => {
  const { to, children, classes } = props;
  return (
    <Link to={to} className={`dolyami ${classes?.root ? classes.root : ""}`}>
      <img className="dolyami__img" src="/icons/dolyami.svg" alt="" />
      <div className="dolyami__text">{children}</div>
      <div className="dolyami__arrow"></div>
    </Link>
  );
};

export default Dolyami;
