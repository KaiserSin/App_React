import { SubcategoryList } from "./SubcategoryList";
import { subcategories  } from "../../shared/composables/constants/constant";

export function Subcategories({categoryName, subcategories}) {
    return(
        <div className="div-block-33">
            <div className="text-block-20">
                {categoryName}
            </div>
            <div className="grid-6">
                <SubcategoryList subcategories={subcategories}/>
                {/* <SubcategoryList subcategories={subcategories}/>
                <SubcategoryList subcategories={subcategories}/>
                <SubcategoryList subcategories={subcategories}/>
                <SubcategoryList subcategories={subcategories}/>
                <SubcategoryList subcategories={subcategories}/>
                <SubcategoryList subcategories={subcategories}/>
                <SubcategoryList subcategories={subcategories}/> */}
            </div>
        </div>
    )
}