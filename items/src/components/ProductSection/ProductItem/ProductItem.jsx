import './ProductItem.scss';

import { Card } from "../ProductCard/ProductCard"
import { Description } from "../ProductDescription/ProductDescription"
import {v4 as uuidv4} from 'uuid'

const Item = ({id, image_url, currentprice, oldprice, text}) => {
    return (
        <div id = {id} className="item" >
            <Card image_url={image_url}/>
            <Description currentprice={currentprice} oldprice={oldprice} text={text}/>
        </div>
    );
    }

export {Item}