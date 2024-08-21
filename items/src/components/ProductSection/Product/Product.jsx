import './Product.scss';
import {v4 as uuidv4} from 'uuid'

const Product = ({ id, imageUrl, currentPrice, oldPrice, text }) => {
    return (
        <div id={id} className="product">
            <div className="product__card">
                <a href="#" className="product__card-link">
                    <img 
                        src={imageUrl} 
                        loading="lazy" 
                        alt="Product image" 
                        className="product__card-image"
                    />
                </a>
            </div>
            <div className="product__description">
                <a href="#" className="product__description-price">
                    <div className="product__description-price-current">{currentPrice}₽</div>
                    <div className="product__description-price-old">
                        <sup>{oldPrice}₽</sup>
                    </div>
                </a>
                <a href="#" className="product__description-text">
                    <div className="product__description-text-content">{text}</div>
                </a>
            </div>
        </div>
    );
};

export { Product };
