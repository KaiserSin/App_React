import { Menu } from "./Menu.jsx";
import './Catalog.scss'
import { Subcategories } from "./Subcategories.jsx";

export function Catalog() {
    return(
        <section className="catalogpc">
            <Menu/>
            {/* <Subcategories subcategories={}/> */}
        </section>
    )
}
