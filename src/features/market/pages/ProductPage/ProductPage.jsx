import React from "react";
import { useGetProductQuery } from "@/redux/reducers/marketApi";

import "./ProductPage.scss";
import ProductGalleryBlock from "@features/market/components/ProductGalleryBlock/ProductGalleryBlock";
import ProductInfoBlock from "@features/market/components/ProductInfoBlock/ProductInfoBlock";
import ReviewsSection from "@features/market/components/ReviewsSection/ReviewsSection";
import ProductCartBlock from "@features/market/components/ProductCartBlock/ProductCartBlock";

const ProductPage = () => {
  const { data } = useGetProductQuery();
  console.log(data);

  return (
    <>
      <section className="product-section">
        <div className="product-section__container">
          <ProductGalleryBlock />
          <ProductInfoBlock />
          <ProductCartBlock />
        </div>
      </section>
      <ReviewsSection />
    </>
  );
};

export default ProductPage;
