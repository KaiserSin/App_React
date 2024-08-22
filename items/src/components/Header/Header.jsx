import LowerHeader from "./LowerHeader";
import UpperHeader from "./UpperHeader";
import "./Header.scss";
import { useContext, useState } from "react";

function Header({ onChange }) {
  const [showCatalog, setShowCatalog] = useState('')

  const  handleCatalogToggle = (show) => {
    setShowCatalog(show)
    onChange(showCatalog)
  }



  return (
    <header id="header" className="header">
      <UpperHeader />
      <LowerHeader onChange={handleCatalogToggle}/>
    </header>
  );
}

export default Header;
