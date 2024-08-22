import './Catalog.scss'

export function Category ({id, name, imageUrl, subcategories: []}){
    
    const handleClickCategory = () => {
        console.log('clicked category ' + name)
    }

    return(
        <li id={id} className="list-item-idle">
            <a className="link-block-31" href="#" onClick={handleClickCategory}>
                <img src={imageUrl} loading="lazy" alt="" width="25"/>
                <div className="text-block-19">
                    {name}
                </div>
            </a>
        </li>
    )
}
