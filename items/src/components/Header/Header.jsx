import LowerHeader from "./LowerHeader";
import UpperHeader from "./UpperHeader";

import "./Header.scss";

function Header() {
  return (
    <header id="header" className="header">
      <UpperHeader />
      <LowerHeader />
    </header>
  );
}

export default Header;
