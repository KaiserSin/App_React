import React from "react";

import Product from "../Product/Product";
import "./SimilarProductsSection.scss";

const SimilarProductsSection = (props) => {
  return (
    <section className="similar-products">
      <div className="similar-products__container">
        <h2 className="similar-products__title">Аналогичные товары</h2>
        <div className="similar-products__body">
          <Product
            classes={{ root: "similar-products__item" }}
            price={"1903₽"}
            oldPrice={"1903₽"}
            discount="-55%"
            rating="4.5 / 5"
            reviews="11к отзывов"
            name="Игровая мышь “E-YOOSO”"
            image_url={
              "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ac3a34d91ae6572dce76fe_7078587423%201.png"
            }
          />
          <Product
            classes={{ root: "similar-products__item" }}
            price={"1903₽"}
            oldPrice={"1903₽"}
            discount="-55%"
            rating="4.5 / 5"
            reviews="11к отзывов"
            name="Игровая мышь “E-YOOSO”"
            image_url={"/common-images/ItemImage.png"}
          />
          <Product
            classes={{ root: "similar-products__item" }}
            price={"1903₽"}
            oldPrice={"1903₽"}
            discount="-55%"
            rating="4.5 / 5"
            reviews="11к отзывов"
            name="Игровая мышь “E-YOOSO”"
            image_url={
              "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ac3a34d91ae6572dce76fe_7078587423%201.png"
            }
          />
          <Product
            classes={{ root: "similar-products__item" }}
            price={"1903₽"}
            oldPrice={"1903₽"}
            discount="-55%"
            rating="4.5 / 5"
            reviews="11к отзывов"
            name="Игровая мышь “E-YOOSO”"
            image_url={"/common-images/ItemImage.png"}
          />
          <Product
            classes={{ root: "similar-products__item" }}
            price={"1903₽"}
            oldPrice={"1903₽"}
            discount="-55%"
            rating="4.5 / 5"
            reviews="11к отзывов"
            name="Игровая мышь “E-YOOSO”"
            image_url={
              "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ac3a34d91ae6572dce76fe_7078587423%201.png"
            }
          />
          <Product
            classes={{ root: "similar-products__item" }}
            price={"1903₽"}
            oldPrice={"1903₽"}
            discount="-55%"
            rating="4.5 / 5"
            reviews="11к отзывов"
            name="Игровая мышь “E-YOOSO”"
            image_url={"/common-images/ItemImage.png"}
          />
          <Product
            classes={{ root: "similar-products__item" }}
            price={"1903₽"}
            oldPrice={"1903₽"}
            discount="-55%"
            rating="4.5 / 5"
            reviews="11к отзывов"
            name="Игровая мышь “E-YOOSO”"
            image_url={
              "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ac3a34d91ae6572dce76fe_7078587423%201.png"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default SimilarProductsSection;
