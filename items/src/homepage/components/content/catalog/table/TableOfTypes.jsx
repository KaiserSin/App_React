function TableOfTypes([Headings]) {
    return(
        <div className='w-layout-grid grid-6'>
            <div className='subcat'>
                <div className='text-block-21'>
                    {Headings[0]}
                </div>
            </div>
            <div className='subcat'>
                <div className='text-block-21'>
                    {Headings[1]}
                </div>
            </div>
            <div className='subcat'>
                <div className='text-block-21'>
                    {Headings[2]}
                </div>
            </div>
            <div className='subcat'>
                <div className='text-block-21'>
                    {Headings[3]}
                </div>
            </div>    
        </div>
    )
}

export default TableOfTypes;