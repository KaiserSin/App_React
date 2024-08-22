import { Category } from "./Category.jsx";
import "./Catalog.scss"

export function Menu() {
    const catalogData = []
    const categories = [
        {
            "id": 1,
            "categoryName": "Электроника",
            "imageUrl": "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66b26a8c799d72d511434fbc_Mask%20grou5p.svg",
            "subcategories": []
        },
        {
            "id": 2,
            "categoryName": "Одежда",
            "imageUrl": "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66b26a60bbcb5ddf2f5ee741_Mask%20group.svg",
            "subcategories": []
        },
        {
            "id": 3,
            "categoryName": "Обувь",
            "imageUrl": "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66b26a60ac99cc19cb16b1a6_Mask%20group-1.svg",
            "subcategories": []
        },
        {
            "id": 4,
            "categoryName": "Сад",
            "imageUrl": "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66b26a60ee969bef6b3ab69d_Mask%20group-2.svg",
            "subcategories": []
        },
        {
            "id": 5,
            "categoryName": "Детям",
            "imageUrl": "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66b26a636fc0a98af3f1464b_Mask%20group-3.svg",
            "subcategories": []
        },
        {   
            "id": 6,
            "categoryName": "Быт",
            "imageUrl": "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66b26a63ee941079e3842831_Mask%20group-4.svg",
            "subcategories": []
        },
        {
            "id": 7,
            "categoryName": "Спорт",
            "imageUrl": "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66b26a6475830142d0b0643d_Mask%20group-5.svg",
            "subcategories": []
        },
        {
            "id": 8,
            "categoryName": "Аптека",
            "imageUrl": "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66b26a639d300841dca396ae_Mask%20group-6.svg",
            "subcategories": []
        },
        {
            "id": 9,
            "categoryName": "Ремонт",
            "imageUrl": "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66b26a6358ae93244f732250_Mask%20group-7.svg",
            "subcategories": []
        },
        {
            "id": 10,
            "categoryName": "Авто",
            "imageUrl": "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66b26a6687b564f2506c9feb_Mask%20group-8.svg",
            "subcategories": []
        },
        {
            "id": 11,
            "categoryName": "Мебель",
            "imageUrl": "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66b26a6619c27001c0bd6661_Mask%20group-9.svg",
            "subcategories": []
        }
    ]
    categories.forEach(element => {
        catalogData.push(
            <Category key={element.id} id={element.id} name={element.categoryName} imageUrl={element.imageUrl} subcategories={element.subcategories}/>
        )
    })
    return(
        <div className="div-block-32">
            <ul className="list">
                {catalogData}
            </ul>
        </div>
    )
}
