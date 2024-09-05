import React from "react";

import "./MobileCatalogPage.scss";

import Button from "@shared/components/Buttons/Button/Button";
import { catalogMobileLargeItems, catalogMobileSmallItems } from "../Constants/Categories";

const MobileCatalogPage = () => {
  return (
    <div className="mobile-catalog">
      <h1 className="mobile-catalog__title">Каталог</h1>
      <div className="mobile-catalog__large-items">
        {catalogMobileLargeItems.map((item) => {
          return (
            <div key={item.name} className="mobile-catalog-large-item">
              <div className="mobile-catalog-large-item__block-img">
                <img className="mobile-catalog-large-item__img" src={item.imageSrc} alt={"category photo"} />
              </div>
              <div className="mobile-catalog-large-item__text">{item.name}</div>
            </div>
          );
        })}
      </div>
      <div className="mobile-catalog__small-items">
        {catalogMobileSmallItems.map((item) => {
          return (
            <div key={item.name} className="mobile-catalog-small-item">
              <div className="mobile-catalog-small-item__block-img">
                <img className="mobile-catalog-small-item__img" src={item.imageSrc} alt="category icon" />
              </div>
              <div className="mobile-catalog-small-item__text">{item.name}</div>
            </div>
          );
        })}
      </div>
      {/* <Button className={"mobile-catalog__others"}>Другое</Button> */}
    </div>
  );
};

export default MobileCatalogPage;
