/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import DropDown from "./DropDown";

function SearchBar({ placeholder, categoryDropDown, categories }) {
  return (
    <div className="searchbar">
      <DropDown categoryDropDown={categoryDropDown} categories={categories} />
      <form
        id="wf-form-Search"
        name="wf-form-Search"
        data-name="Search"
        method="get"
        data-wf-page-id="66ab7b46556019f9117db3f6"
        data-wf-element-id="e1d9bb1f-13be-a0bf-43fa-d9919f8ad4b7"
        aria-label="Search"
      >
        <input
          className="text-field w-input"
          maxLength="256"
          name="name-3"
          data-name="Name 3"
          placeholder={placeholder}
          type="text"
          id="name-3"
        />
      </form>
      <div className="div-block-14">
        <a href="#" className="link-block-3 w-inline-block">
          <img
            src="https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ab949c4c053432ff74a10b_MicrophoneButton.svg"
            loading="lazy"
            width="19"
            alt=""
            className="image-6"
          />
        </a>
        <a href="#" className="link-block-3 w-inline-block">
          <img
            src="https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ab949b8c4db5c04e1a4bf8_CameraButton.svg"
            loading="lazy"
            width="29"
            alt=""
            className="image-7"
          />
        </a>
        <a href="#" className="link-block-3 w-inline-block">
          <img
            src="https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ab949b0a4c5cc62f26e423_Loupe.svg"
            loading="lazy"
            width="19"
            alt=""
            className="image-8"
          />
        </a>
      </div>
    </div>
  );
}

export default SearchBar;
