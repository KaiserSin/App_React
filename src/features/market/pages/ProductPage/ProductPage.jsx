import React from "react";
import { useGetProductQuery } from "@/redux/reducers/marketApi";

import ProductGalleryBlock from "@features/market/components/ProductGalleryBlock/ProductGalleryBlock";
import ProductInfoBlock from "@features/market/components/ProductInfoBlock/ProductInfoBlock";
import ReviewsSection from "@features/market/components/ReviewsSection/ReviewsSection";
import ProductCartBlock from "@features/market/components/ProductCartBlock/ProductCartBlock";
import SimilarProductsSection from "@shared/components/SimilarProductsSection/SimilarProductsSection";
import "./ProductPage.scss";
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
      <SimilarProductsSection />
      <ReviewsSection />
    </>
  );
};

export default ProductPage;
