import { SubcategoryList } from "./SubcategoryList";
import "./Catalog.scss"

export function Subcategories({categoryName, subcategories}) {
    return(
        <div className="div-block-33">
            <div className="text-block-20">
                {categoryName}
            </div>
            <div className="grid-6 w-layout-grid">
                <SubcategoryList subcategories={subcategories}/>
                <SubcategoryList subcategories={subcategories}/>
                <SubcategoryList subcategories={subcategories}/>
                <SubcategoryList subcategories={subcategories}/>
                <SubcategoryList subcategories={subcategories}/>
                <SubcategoryList subcategories={subcategories}/>
                <SubcategoryList subcategories={subcategories}/>
                <SubcategoryList subcategories={subcategories}/>
            </div>
        </div>
    )
}