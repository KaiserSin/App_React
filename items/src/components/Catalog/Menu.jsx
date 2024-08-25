import { Category } from "./Category.jsx";
import { categories } from "../../shared/composables/constants/constant.js";
import { useState } from "react";
import "./Catalog.scss"

export function Menu() {
    const [activeId, setActiveId] = useState(1)

    return(
        <div className="div-block-32">
            <ul className="list">
                {categories.map((element) => (
                    <Category
                        key={element.id}
                        className={activeId === element.id ? 'list-item' : 'list-item-idle'}
                        id={element.id}
                        name={element.categoryName}
                        imageUrl={element.imageUrl}
                        onClick={() => setActiveId(element.id)}
                    />
                ))}
            </ul>
        </div>
    )
}
