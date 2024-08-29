import { Subcategory } from "../Subcategory/Subcategory";

import "./Category.scss";

export const Category = ({ name, subcategories }) => {
  return (
    <div className="catalog__category">
      <h1>{name}</h1>
      <div className="subcategory">
        {subcategories
          ? subcategories.map((subcategory, index) => (
              <Subcategory {...subcategory} key={index} />
            ))
          : ""}
      </div>
    </div>
  );
};
