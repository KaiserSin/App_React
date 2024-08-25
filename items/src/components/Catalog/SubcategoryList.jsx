import { subcategories } from "../../shared/composables/constants/constant"
import "./Catalog.scss"

export function SubcategoryList({subcategories}) {
    return(
        <div className="subcat">
            <div className="text-block-21">
                {subcategories[0][0]}
            </div>
            <a className="link-block-32" href="#">
                <div className="text-block-22">
                    { subcategories[0][1] }
                </div>
            </a>
            <a className="link-block-32" href="#">
                <div className="text-block-22">
                    { subcategories[0][2] }
                </div>
            </a>
            <a className="link-block-32" href="#">
                <div className="text-block-22">
                    { subcategories[0][3] }
                </div>
            </a>
            <a className="link-block-32" href="#">
                <div className="text-block-22">
                    { subcategories[0][4] }
                </div>
            </a>
            <a className="link-block-32" href="#">
                <div className="text-block-22">
                    { subcategories[0][5] }
                </div>
            </a>
            <a className="link-block-32" href="#">
                <div className="text-block-22">
                    { subcategories[0][6] }
                </div>
            </a>
            <a className="loadmore" href="#">
                <div className="text-block-23">
                    Загрузить ещё
                </div>
            </a>
        </div>
    )
}