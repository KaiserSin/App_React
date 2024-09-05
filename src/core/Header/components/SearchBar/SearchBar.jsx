/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import DropDown from "./SearchBarDropDown";
import cameraButton from "@assets/images/cameraButton.svg";

import "./SearchBar.scss";

function SearchBar(props) {
  const { placeholder, dropDownLabel, dropDownItems, classes } = props;

  return (
    <div className={`search-bar ${classes?.root ? classes.root : ""}`}>
      <DropDown label={dropDownLabel} items={dropDownItems} />
      <input
        className="search-bar__input"
        maxLength="256"
        placeholder={placeholder}
        type="text"
      />
      <div className="search-bar-actions">
        <button className="search-bar-actions__item">
          <img
            src="https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ab949c4c053432ff74a10b_MicrophoneButton.svg"
            alt="Icon"
            className="search-bar-actions__icon"
          />
        </button>
        <button className="search-bar-actions__item">
          <img
            src={cameraButton}
            alt="Icon"
            className="search-bar-actions__icon"
          />
        </button>
        <button className="search-bar-actions__item">
          <img
            src="https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ab949b0a4c5cc62f26e423_Loupe.svg"
            alt="Icon"
            className="search-bar-actions__icon"
          />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
