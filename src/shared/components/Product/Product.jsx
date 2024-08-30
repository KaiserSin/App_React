import toBin from "@assets/images/cartImages/toBin.svg";
import yellowLightning from "@assets/images/cartImages/yellowLightning.svg";
import star from "@assets/images/cartImages/Star.svg";

import Button from "@shared/components/Buttons/Button/Button";

import "./Product.scss";
import AnimatedLike from "../AnimatedLike/AnimatedLike";
import { useState } from "react";

const Product = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const { classes, id, name, price, oldPrice, discount, image_url, rating, reviews } = props;

  return (
    <div key={id} className={`product-card ${classes?.root ? classes.root : ""}`}>
      <div className="product-card__block-img">
        <img src={image_url} alt={name} className="product-card__image" />
        <button
          onClick={() => {
            setIsLiked(!isLiked);
          }}
          className="product-card__like">
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

export default Product;
