import React from "react";
import ShopCard from "@features/market/components/ShopCard/ShopCard";
import { useGetProductQuery } from "@/redux/reducers/marketApi";

import "./ProductGalleryBlock.scss";
import CircularProgressBar from "@shared/components/CircularProgressBar/CircularProgressBar";
const ProductGalleryBlock = () => {
  const { data } = useGetProductQuery();

  return (
    <div className="product-section-gallery">
      <div className="product-section-gallery__thumbs">
        {data?.images.map((image, index) => {
          return (
            <button key={index} className="product-section-gallery__thumb">
              <img className="product-section-gallery__thumb-img" src={image} alt="" />
            </button>
          );
        })}
        <button className="product-section-gallery__more-thumbs"></button>
      </div>
      <div className="product-section-gallery__block-main-image">
        <img className="product-section-gallery__main-image" src={data?.images[0]} alt="" />
      </div>
      <div className="product-section-sale">
        <CircularProgressBar size={45} strokeWidth={9} progress={25} />
        <div className="product-section-sale__info">
          <div className="product-section-sale__state">Распродажа</div>
          <div className="product-section-sale__items-left">
            Осталось <span className="product-section-sale__red-span">50</span> шт
          </div>
        </div>
        <div className="product-section-sale__days-left">10 дней до конца</div>
      </div>
      <ShopCard
        deliveryPercentage={data?.shop.deliveryPercentage}
        moneyBackTime={data?.shop.moneyBackTime}
        rating={data?.shop.rating}
        isPremium={data?.shop.labels.isPremium}
        isTopRating={data?.shop.labels.isTopRating}
        link={data?.shop.address}
        shopImage={data?.shop.img}
        shopName={data?.shop.name}
        classes={{ root: "product-section-shop-card" }}
      />
    </div>
  );
};

export default ProductGalleryBlock;
