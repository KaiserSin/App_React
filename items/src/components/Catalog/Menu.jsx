import { Category } from "./Category.jsx";
import { categories } from "../../shared/composables/constants/constant.js";
import "./Catalog.scss"

export function Menu() {
    const catalogData = []
    categories.forEach(element => {
        catalogData.push(
            <Category key={element.id} id={element.id} name={element.categoryName} imageUrl={element.imageUrl}/>
        )
    })
    return(
        <div className="div-block-32">
            <ul className="list">
                {catalogData}
            </ul>
        </div>
    )
}
