import { Menu } from "./Menu.jsx";
import './Catalog.scss'
import { Subcategories } from "./Subcategories.jsx";
import { subcategories } from "../../shared/composables/constants/constant.js";

export function Catalog({categoryName}) {
    return(
        <section className="catalogpc">
            <Menu/>
            <Subcategories subcategories={subcategories} categoryName={"Электроника"}/>
        </section>
    )
}
