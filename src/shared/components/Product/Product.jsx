import toBin from "@assets/images/cartImages/toBin.svg";
import yellowLightning from "@assets/images/cartImages/yellowLightning.svg";
import star from "@assets/images/cartImages/Star.svg";

const Product = ({
  id,
  name,
  price,
  oldprice,
  discount,
  imageUrl,
  rating,
  reviews,
}) => {
  return (
    <div key={id} className="product-card">
      <img src={imageUrl} alt={name} className="product-card__image" />

      <div className="product-card__rating-reviews">
        <span className="product-card__star">
          {" "}
          <img src={star} alt="Star" className="product-card__star" />
        </span>
        <span className="rating">{rating}</span>
        <span className="reviews">{reviews}</span>
      </div>

      <div className="product-card__pricing">
        <span className="product-card__price">{price}</span>
        <span className="product-card__oldprice">
          <sup>{oldprice}</sup>
        </span>
        <span className="product-card__discount">
          <sup className="discount-percentage">{discount}</sup>
        </span>
      </div>

      <div className="product-card__name">{name}</div>

      <div className="product-card__actions">
        <img src={toBin} alt="Add to Cart" />

        <img
          src={yellowLightning}
          alt="Buy Now"
          className="product-card__lightning-btn"
        />
      </div>
    </div>
  );
};

export default Product;
