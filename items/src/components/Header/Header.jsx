import LowerHeader from "./LowerHeader";
import UpperHeader from "./UpperHeader";
import "./Header.scss";
import { useState } from "react";

function Header({ setShow, show }) {
  return (
    <header id="header" className="header">
      <UpperHeader />
      <LowerHeader setShow={setShow} show={show}/>
    </header>
  );
}

export default Header;
