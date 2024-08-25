import { Category } from "./Category.jsx";
import { categories } from "../../shared/composables/constants/constant.js";
import "./Catalog.scss"

export function Menu() {
    const onClick = () => {
        console.log('Clicked category')
        if (chosen == "true") {
            setStyle("list-item")
            console.log('Set ' + name + ' category style to list-item')
        } else {
            setStyle("list-item-idle")
            console.log('Set ' + name + ' category style to list-item-idle')
        }
    }

    const catalogData = []
    categories.forEach(element => {
        catalogData.push(
            <Category key={element.id} id={element.id} name={element.categoryName} imageUrl={element.imageUrl} chosen={true} onClick={onClick}/>
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
