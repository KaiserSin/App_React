export function SubcategoryList({subcategories: []}) {
    return(
        <div className="subcat">
            <div className="text-block-21">
                {subcategories}
            </div>
            <a className="link-block-32" href="#">
                <div className="text-block-22">
                    { subcategories[0] }
                </div>
            </a>
            <a className="link-block-32" href="#">
                <div className="text-block-22">
                    { subcategories[1] }
                </div>
            </a>
            <a className="link-block-32" href="#">
                <div className="text-block-22">
                    { subcategories[2] }
                </div>
            </a>
            <a className="link-block-32" href="#">
                <div className="text-block-22">
                    { subcategories[3] }
                </div>
            </a>
            <a className="link-block-32" href="#">
                <div className="text-block-22">
                    { subcategories[4] }
                </div>
            </a>
            <a className="link-block-32" href="#">
                <div className="text-block-22">
                    { subcategories[5] }
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