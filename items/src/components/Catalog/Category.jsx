import { useState } from 'react'
import './Catalog.scss'

export function Category ({id, name, imageUrl, chosen, onClick}){
    const [style, setStyle] = useState("list-item-idle")

    const handleClickCategory = () => {
        console.log('Clicked ' + name + ' category')
        if (chosen == "true") {
            setStyle("list-item")
            console.log('Set ' + name + ' category style to list-item')
        } else {
            setStyle("list-item-idle")
            console.log('Set ' + name + ' category style to list-item-idle')
        }
    }

    return(
        <li id={id} className={style} onClick={onClick}>
            <a className="link-block-31" href="#">
                <img src={imageUrl} loading="lazy" alt="" width="25"/>
                <div className="text-block-19">
                    {name}
                </div>
            </a>
        </li>
    )
}
