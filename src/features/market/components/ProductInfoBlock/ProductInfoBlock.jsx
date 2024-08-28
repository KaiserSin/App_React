import React from "react";

import Label from "@/shared/components/Label/Label";
import BrandCard from "@features/market/components/BrandCard/BrandCard";
import ProductVariant from "@features/market/components/ProductVariant/ProductVariant";

import { useGetProductQuery } from "@/redux/reducers/marketApi";

import TextButton from "@/shared/components/Buttons/TextButton/TextButton";
import "./ProductInfoBlock.scss";

const ProductInfoBlock = () => {
  const { data } = useGetProductQuery();

  return (
    <div className="product-section-info">
      <div className="product-section-info__labels">
        {data?.labels.map((label) => (
          <Label key={label} color="red">
            {label}
          </Label>
        ))}
      </div>
      <h1 className="product-section-info__product-name">{data?.productName}</h1>
      <div className="product-section-info__tags">
        {data?.tags.map((tag) => {
          return (
            <Label key={tag} color={"white"}>
              {tag}
            </Label>
          );
        })}
      </div>
      <div className="product-section-info__addition">{data?.additionalInfo}</div>
      <div className="product-section-info__rating">
        {data?.rating}
        <img className="product-section-info__rating-star" src="/icons/yellowStar.svg" alt="" />
        <img className="product-section-info__rating-star" src="/icons/yellowStar.svg" alt="" />
        <img className="product-section-info__rating-star" src="/icons/yellowStar.svg" alt="" />
        <img className="product-section-info__rating-star" src="/icons/yellowStar.svg" alt="" />
        <img className="product-section-info__rating-star" src="/icons/yellowStar.svg" alt="" />
        <div className="product-section-info__reviews-count">({data?.reviewsCount})</div>
      </div>
      <div className="product-section-variants">
        <h3 className="product-section-variants__title">Варианты</h3>
        <div className="product-section-variants__items">
          {data?.variants.map((variant, index) => {
            return (
              <ProductVariant className="product-section-variants__item" isDisabled={!variant.inStock} key={index}>
                <img className="product-section-variants__img" src={variant.value} alt="" />
              </ProductVariant>
            );
          })}
        </div>
      </div>
      <div className="product-section-config">
        <h3 className="product-section-config__title">Конфигурация</h3>
        <div className="product-section-config__items">
          {data?.configuration.map((config, index) => {
            return (
              <ProductVariant className="product-section-config__item" isDisabled={!config.inStock} key={index}>
                {config.value}
              </ProductVariant>
            );
          })}
        </div>
      </div>
      <BrandCard
        link={"https://www.razer.com/"}
        imageSrc={"/product-page-images/razer.jpeg"}
        isPopular
        name={"Razer"}
        trustPercentage={"88%"}
        classes={{ root: "product-section-info__brand-card" }}
      />
      <div className="product-section-overview">
        <div className="product-section-description product-section-overview-card">
          <header className="product-section-overview-card__header">
            <h3 className="product-section-overview-card__title">Описание</h3>
            <div className="product-section-overview-card__actions">
              <TextButton>
                <img className="product-section-overview-card__icon" src="/icons/copy.svg" alt="" />
                Арктикул: 65468812
              </TextButton>
            </div>
          </header>
          <div className="product-section-overview-card__body">
            Игровая проводная мышь PB1P представляет собой высококачественное устройство, разработанное специально для
            обеспечения комфорта и точности в играх.
          </div>
          <button className="product-section-overview-card__more">Читать далее</button>
        </div>
        <div className="product-section-features product-section-overview-card">
          <header className="product-section-overview-card__header">
            <h3 className="product-section-overview-card__title">Характеристики</h3>
            <div className="product-section-overview-card__actions">
              <TextButton>
                <img className="product-section-overview-card__icon" src="/icons/ai.svg" alt="" />
                AI анализ
              </TextButton>
              <TextButton>
                <img className="product-section-overview-card__icon" src="/icons/compare.svg" alt="" />
                Сравнить
              </TextButton>
            </div>
          </header>
          <div className="product-section-overview-card__body">
            <div className="product-section-features-table">
              <div className="product-section-features-table__title">Интерфейс подключения</div>
              <div className="product-section-features-table__body">micro USB</div>
              <div className="product-section-features-table__title">Тип сенсора</div>
              <div className="product-section-features-table__body">оптический</div>
              <div className="product-section-features-table__title">Разрешение сенсора</div>
              <div className="product-section-features-table__body">7200 DPI</div>
              <div className="product-section-features-table__title">Особенности</div>
              <div className="product-section-features-table__body">бесшумное нажатие и др</div>
            </div>
          </div>
          <button className="product-section-overview-card__more product-section-features__more">
            Все характеристики
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoBlock;
