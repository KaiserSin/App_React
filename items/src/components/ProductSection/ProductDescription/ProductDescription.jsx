import './ProductDescription.scss';


const Description = ({ currentPrice, oldPrice, text }) => {
    return (
        <div className="description">
            <a href="#" className="description__price">
                <div className="description__price-current">{currentPrice}</div>
                <div className="description__price-old">
                    <sup>{oldPrice}</sup>
                </div>
            </a>
            <a href="#" className="description__text">
                <div className="description__text-content">{text}</div>
            </a>
        </div>
    );
}

export { Description };


