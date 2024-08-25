import './Catalog.scss'

export function Category ({className, id, name, imageUrl, onClick}){
    return(
        <li id={id} className={className } onClick={onClick}>
            <a className="link-block-31" href="#">
                <img src={imageUrl} loading="lazy" alt="" width="25"/>
                <div className="text-block-19">
                    {name}
                </div>
            </a>
        </li>
    )
}
