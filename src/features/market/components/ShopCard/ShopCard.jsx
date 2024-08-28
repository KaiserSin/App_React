import React from "react";

import "./ShopCard.scss";
import Label from "@/shared/components/Label/Label";

const ShopCard = (props) => {
  const { classes, shopName, shopImage, link, isPremium, isTopRating, rating, deliveryPercentage, moneyBackTime } =
    props;

  return (
    <div className={`shop-card ${classes?.root ? classes.root : ""}`}>
      <div className="shop-card__block-img">
        <img className="shop-card__img" src={shopImage} alt="shop image" />
      </div>
      <div className="shop-card__body">
        <div className="shop-card__labels">
          {isTopRating && (
            <Label className="shop-card__label">
              <img src="/icons/flame.svg" alt="" />
              Топ магазин
            </Label>
          )}
          {isPremium && (
            <Label className="shop-card__label" imageSrc={""} text="">
              <img src="/icons/crown.svg" alt="" />
              Premium
            </Label>
          )}
        </div>
        <div className="shop-card__name">{shopName}</div>
        <a href={link} className="shop-card__link">
          Страница магазина
        </a>
        <div className="shop-card-common-info">
          {rating && (
            <div className="shop-card-common-info__item">
              <img className="shop-card-common-info__icon" src="/icons/fallingStar.svg" alt="" />
              <span className="shop-card-common-info__text">{rating} общий рейтинг</span>
            </div>
          )}
          {deliveryPercentage && (
            <div className="shop-card-common-info__item">
              <img className="shop-card-common-info__icon" src="/icons/delivery.svg" alt="" />
              <span className="shop-card-common-info__text">{deliveryPercentage} доставлено вовремя</span>
            </div>
          )}
          {moneyBackTime && (
            <div className="shop-card-common-info__item">
              <img className="shop-card-common-info__icon" src="/icons/moneyBack.svg" alt="" />
              <span className="shop-card-common-info__text">{moneyBackTime} на возврат</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
