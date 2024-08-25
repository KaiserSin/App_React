import { Menu } from "./Menu.jsx";
import { Subcategories } from "./Subcategories.jsx";
import { subcategories } from "@shared/composables/constants/constant.js";
import "./Catalog.scss";

export function Catalog({ categoryName }) {
  return (
    <section className="catalogpc">
      <Menu />
      <Subcategories
        subcategories={subcategories}
        categoryName={"Электроника"}
      />
    </section>
  );
}
