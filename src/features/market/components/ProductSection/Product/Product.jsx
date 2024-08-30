import "./Product.scss";
import { v4 as uuidv4 } from "uuid";
import toBin from "@assets/images/cartImages/toBin.svg";
import yellowLightning from "@assets/images/cartImages/yellowLightning.svg";
import star from "@assets/images/cartImages/Star.svg";

const Product = ({
  id,
  name,
  price,
  oldPrice,
  discount,
  imageUrl,
  rating,
  reviews,
}) => {
  return (
    <div key={id} className="product-card">
      <img
        src={imageUrl || "./src/assets/images/cartImages/mouse-white.png"}
        alt={name}
        className="product-card__image"
      />
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
          <sup>{oldPrice}</sup>
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

export { Product };

// const Product = ({ id, imageUrl, currentPrice, oldPrice, text }) => {
//   return (
//     <div id={id} className="product">
//       <div className="product__card">
//         <a href="#" className="product__card-link">
//           <img
//             src={imageUrl}
//             loading="lazy"
//             alt="Product image"
//             className="product__card-image"
//           />
//         </a>
//       </div>
//       <div className="product__description">
//         <a href="#" className="product__description-price">
//           <div className="product__description-price-current">
//             {currentPrice}₽
//           </div>
//           <div className="product__description-price-old">
//             <sup>{oldPrice}₽</sup>
//           </div>
//         </a>
//         <a href="#" className="product__description-text">
//           <div className="product__description-text-content">{text}</div>
//         </a>
//       </div>
//     </div>
//   );
// };

// export { Product };
