import { SubcategoryList } from "./SubcategoryList";

export function Subcategories({subcategories: []}) {
    return(
        <div className="div-block-33">
            <div className="text-block-20">
                {subcategories}
            </div>
            <div className="grid-6">
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