import { categories } from "../Constants/Categories";
import { useState } from "react";

import "./Catalog-page.scss";
import { Category } from "../components/Category/Category";

export const CatalogPage = () => {
  const [activeId, setActiveId] = useState(0);

  return (
    <section className="catalog">
      <div className="catalog__menu">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`catalog__menu-item ${
              activeId === category.id ? "active" : ""
            }`}
            onClick={() => setActiveId(category.id)}
          >
            <img src={category.iconSrc} alt="catalog-icon" />
            <div>{category.name}</div>
          </div>
        ))}
      </div>
      <Category {...categories[activeId]} />
    </section>
  );
};
