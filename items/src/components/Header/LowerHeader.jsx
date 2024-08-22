import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Button from "@/shared/components/Buttons/Button/Button";
import Logo from "@/shared/components/Logo/Logo";
import { useDisplayProfile } from "../../context/ProfileContext";

function LowerHeader() {
  const { toggleProfile } = useDisplayProfile();
  return (
    <div className="lower-header">
      <div className="lower-header__container">
        <div className="lower-header__body">
          <Logo />
          <Button>Каталог</Button>
          <SearchBar
            placeholder="Найдется все"
            categoryDropDown="Категория"
            categories={["1", "2", "3"]}
          />
          <nav className="lower-header__links">
            <Link
              to={"/"}
              className="lower-header__link"
              onClick={toggleProfile}
            >
              <img
                src="https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ac1098361c5745701358eb_Group%205-3.svg"
                loading="lazy"
                alt=""
              />
            </Link>
            <Link to={"/"} className="lower-header__link">
              <img
                src="https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ac10987fa376e04137a997_Group%205-2.svg"
                loading="lazy"
                alt=""
              />
            </Link>
            <Link to={"/"} className="lower-header__link">
              <img
                src="https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ac10985f3cbc367dcde5ce_Group%205-1.svg"
                loading="lazy"
                alt=""
              />
            </Link>
            <Link to={"/"} className="lower-header__link">
              <img
                src="https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ac1098c943ea53bca551ec_Group%205.svg"
                loading="lazy"
                alt=""
              />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default LowerHeader;
