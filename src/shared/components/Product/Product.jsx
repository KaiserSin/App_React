import star from "@assets/images/cartImages/Star.svg";
import Button from "@shared/components/Buttons/Button/Button";
import "./Product.scss";
import AnimatedLike from "../AnimatedLike/AnimatedLike";
import { useState } from "react";

export const Product = ({
  classes,
  id,
  name,
  price,
  oldPrice,
  discount,
  imageUrl,
  rating,
  reviews,
  liked,
}) => {
  const [isLiked, setIsLiked] = useState(liked);

  return (
    <div
      key={id}
      className={`product-card ${classes?.root ? classes.root : ""}`}
    >
      <div className="product-card__block-img">
        <img src={imageUrl} alt={name} className="product-card__image" />
        <button
          onClick={() => {
            setIsLiked(!isLiked);
          }}
          className="product-card__like"
        >
          <AnimatedLike isLiked={isLiked} />
        </button>
      </div>

      <div className="product-card__body">
        <div className="product-card__rating-reviews">
          <span className="product-card__star">
            {" "}
            <img src={star} alt="Star" className="product-card__star" />
          </span>
          <span className="product-card__rating">{rating}</span>
          <span className="product-card__reviews">{reviews}</span>
        </div>

        <div className="product-card__pricing">
          <span className="product-card__price">{price}</span>
          <span className="product-card__old-price">
            <sup>{oldPrice}</sup>
          </span>
          <span className="product-card__discount">
            <sup>{discount}</sup>
          </span>
        </div>

        <div className="product-card__name">{name}</div>

        <div className="product-card__actions">
          <Button className="product-card__to-cart" color="yellow">
            В корзину
          </Button>
          <Button className="product-card__fast-to-cart" color="yellow">
            <img src="/icons/lightning.svg" alt="" />
          </Button>
        </div>
      </div>
    </div>
  );
};
