import React from "react";

import "./BrandCard.scss";

const BrandCard = (props) => {
  const { imageSrc, name, link, trustPercentage, isPopular, classes } = props;
  return (
    <div className={`brand-card ${classes?.root ? classes.root : ""}`}>
      <div className="brand-card__block-img">
        {imageSrc && <img src={imageSrc} alt="brand image" className="brand-card__img" />}
      </div>
      <div className="brand-card__name">{name}</div>
      <a href={link} className="brand-card__link">
        Бренд
      </a>
      <div className="brand-card-common-info">
        {trustPercentage && (
          <div className="brand-card-common-info__item">
            <img className="brand-card-common-info__icon" src="/icons/like.svg" alt="like icon" />
            <span className="brand-card-common-info__text">{trustPercentage} покупателей доверяют</span>
          </div>
        )}
        {isPopular && (
          <div className="brand-card-common-info__item">
            <img
              style={{ filter: "invert(100%)" }}
              className="brand-card-common-info__icon"
              src="/icons/flame.svg"
              alt="like icon"
            />
            <span className="brand-card-common-info__text">популярный бренд</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandCard;
