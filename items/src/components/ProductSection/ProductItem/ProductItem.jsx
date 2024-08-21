import './ProductItem.scss';

import { Card } from "../ProductCard/ProductCard"
import { Description } from "../ProductDescription/ProductDescription"
import {v4 as uuidv4} from 'uuid'

const Item = ({id, image_url, currentprice, oldprice, text}) => {
    return (
        <div id = {id} className="item" >
            <Card imageUrl={image_url} />
            <Description currentPrice={currentprice} oldPrice={oldprice} text={text} />

        </div>
    );
    }

export {Item}