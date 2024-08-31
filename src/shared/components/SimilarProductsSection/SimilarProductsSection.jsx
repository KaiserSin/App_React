import React, { useEffect, useState } from "react";
import { Product } from "../Product/Product";
import "./SimilarProductsSection.scss";

import productsData from "@shared/composables/constants/productStrip.json";

const SimilarProductsSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productsToRender = [...productsData];

    while (productsToRender.length < 20) {
      productsToRender = productsToRender.concat(productsData).slice(0, 20);
    }

    setProducts(productsToRender);
  }, []);

  return (
    <section className="similar-products">
      <div className="similar-products__container">
        <h2 className="similar-products__title">Аналогичные товары</h2>
        <div className="similar-products__body">
          {products.map((product, index) => (
            <Product
              key={`${product.id}-${index}`}
              classes={{ root: "similar-products__item" }}
              price={product.price}
              oldPrice={product.oldPrice}
              discount={product.discount}
              rating={product.rating}
              reviews={product.reviews}
              name={product.name}
              imageUrl={product.imageUrl}
              liked={product.liked}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarProductsSection;

// import React from "react";
// import Product from "../Product/Product";
// import "./SimilarProductsSection.scss";

// const SimilarProductsSection = (props) => {
//   return (
//     <section className="similar-products">
//       <div className="similar-products__container">
//         <h2 className="similar-products__title">Аналогичные товары</h2>
//         <div className="similar-products__body">
//           <Product
//             classes={{ root: "similar-products__item" }}
//             price={"1903₽"}
//             oldPrice={"1903₽"}
//             discount="-55%"
//             rating="4.5 / 5"
//             reviews="11к отзывов"
//             name="Игровая мышь “E-YOOSO”"
//             imageUrl={
//               "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ac3a34d91ae6572dce76fe_7078587423%201.png"
//             }
//           />
//           <Product
//             classes={{ root: "similar-products__item" }}
//             price={"1903₽"}
//             oldPrice={"1903₽"}
//             discount="-55%"
//             rating="4.5 / 5"
//             reviews="11к отзывов"
//             name="Игровая мышь “E-YOOSO”"
//             imageUrl={"/common-images/ItemImage.png"}
//           />
//           <Product
//             classes={{ root: "similar-products__item" }}
//             price={"1903₽"}
//             oldPrice={"1903₽"}
//             discount="-55%"
//             rating="4.5 / 5"
//             reviews="11к отзывов"
//             name="Игровая мышь “E-YOOSO”"
//             imageUrl={
//               "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ac3a34d91ae6572dce76fe_7078587423%201.png"
//             }
//           />
//           <Product
//             classes={{ root: "similar-products__item" }}
//             price={"1903₽"}
//             oldPrice={"1903₽"}
//             discount="-55%"
//             rating="4.5 / 5"
//             reviews="11к отзывов"
//             name="Игровая мышь “E-YOOSO”"
//             imageUrl={"/common-images/ItemImage.png"}
//           />
//           <Product
//             classes={{ root: "similar-products__item" }}
//             price={"1903₽"}
//             oldPrice={"1903₽"}
//             discount="-55%"
//             rating="4.5 / 5"
//             reviews="11к отзывов"
//             name="Игровая мышь “E-YOOSO”"
//             imageUrl={
//               "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ac3a34d91ae6572dce76fe_7078587423%201.png"
//             }
//           />
//           <Product
//             classes={{ root: "similar-products__item" }}
//             price={"1903₽"}
//             oldPrice={"1903₽"}
//             discount="-55%"
//             rating="4.5 / 5"
//             reviews="11к отзывов"
//             name="Игровая мышь “E-YOOSO”"
//             imageUrl={"/common-images/ItemImage.png"}
//           />
//           <Product
//             classes={{ root: "similar-products__item" }}
//             price={"1903₽"}
//             oldPrice={"1903₽"}
//             discount="-55%"
//             rating="4.5 / 5"
//             reviews="11к отзывов"
//             name="Игровая мышь “E-YOOSO”"
//             imageUrl={
//               "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ac3a34d91ae6572dce76fe_7078587423%201.png"
//             }
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SimilarProductsSection;
