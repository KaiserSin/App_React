import './catalog.scss'
import CategoriesColumn from './left-column/CategoriesColumn';
import CategoriesList from './table/CategoriesList'

function Catalog({}) {
    return(
        <section className='catalogpc'>
            <CategoriesColumn Categories={
                [{imageUrl: 'https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66b26a8c799d72d511434fbc_Mask%20grou5p.svg',
                    heading: 'Электроника'
                }, 
                {imageUrl: 'https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66b26a60bbcb5ddf2f5ee741_Mask%20group.svg',
                    heading: 'Одежда'
                }, 
                {imageUrl: 'https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66b26a60ac99cc19cb16b1a6_Mask%20group-1.svg',
                    heading: 'Обувь'
                }, 
                {imageUrl: 'https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66b26a60ee969bef6b3ab69d_Mask%20group-2.svg',
                    heading: 'Сад'
                }, 
                {imageUrl: 'https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66b26a636fc0a98af3f1464b_Mask%20group-3.svg',
                    heading: 'Детям'
                }, 
                {imageUrl: 'https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66b26a63ee941079e3842831_Mask%20group-4.svg',
                    heading: 'Быт'
                }, 
                {imageUrl: 'https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66b26a6475830142d0b0643d_Mask%20group-5.svg',
                    heading: 'Спорт'
                }, 
                {imageUrl: 'https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66b26a639d300841dca396ae_Mask%20group-6.svg',
                    heading: 'Аптека'
                }, 
                {imageUrl: 'https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66b26a6358ae93244f732250_Mask%20group-7.svg',
                    heading: 'Ремонт'
                }, 
                {imageUrl: 'https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66b26a6687b564f2506c9feb_Mask%20group-8.svg',
                    heading: 'Авто'
                }, 
                {imageUrl: 'https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66b26a6619c27001c0bd6661_Mask%20group-9.svg',
                    heading: 'Мебель'
                }]}/>
            <CategoriesList/>
        </section>
    )
}

export default Catalog;