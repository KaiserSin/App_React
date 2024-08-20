import './ProductCard.scss';


const Card = ({ imageUrl }) => {
    return (
        <div className="card">
            <a href="#" className="card__link">
                <img 
                    src={imageUrl} 
                    loading="lazy" 
                    alt="Card image" 
                    className="card__image"
                />
            </a>
        </div>
    );
};

export { Card };

