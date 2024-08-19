/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import Button from "./Button";
import SearchBar from "./SearchBar";
import NavigationLinks from "./NavigationLinks";
function LowerHeader({ catalogName, catalogHref }) {
  return (
    <div className="hblock2">
      <a href="#" className="link-block-9 w-inline-block"></a>
      <Button href={catalogHref} content={catalogName} />
      <SearchBar
        placeholder="Найдется все"
        categoryDropDown="Категория"
        categories={["1", "2", "3"]}
      />
      <NavigationLinks/>
    </div>
  );
}

export default LowerHeader;