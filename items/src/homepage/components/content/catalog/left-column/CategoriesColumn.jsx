import './categories-column.scss'

function CategoriesColumn() {
    const [list, setChosen] = useState(
        'Электроника' = true,
        'Одежда' = false,
        'Обувь' = false,
        'Сад' = false,
        'Дети' = false,
        'Быт' = false,
        'Спорт' = false,
        'Аптека' = false,
        'Ремонт' = false,
        'Авто' = false,
        'Мебель' = false
    )
    let array = []
    list.forEach(element => {
        array.push(
        <li className='list-item'>
            <a className='link-block-31 w-inline-block' href='#'>
                <img src={element.imageUrl} loading='lazy' alt='' width='25'>
                </img>
                <div className='text-block-19'>
                    {element.heading}
                </div>
            </a>
        </li>
        )  
    });
    return(
        <div className="div-block-32">
            <ul className='list' role='list'>
                {array}
            </ul>
        </div>
    )
}

export default CategoriesColumn;