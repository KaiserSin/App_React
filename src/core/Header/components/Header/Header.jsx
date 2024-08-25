import LowerHeader from "../LowerHeader/LowerHeader";
import UpperHeader from "../UpperHeader/UpperHeader";
import "./Header.scss";

function Header({ setShow, show }) {
  return (
    <header id="header" className="header">
      <UpperHeader />
      <LowerHeader setShow={setShow} show={show} />
    </header>
  );
}

export default Header;
