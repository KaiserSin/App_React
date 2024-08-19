
const Description = ({currentprice, oldprice, text}) =>{
    return(
        <div className="description">
            <a href="#" className="price w-inline-block">
                <div className="currentprice">{currentprice}</div>
                <div className="oldprice">
                    <sup>{oldprice}</sup>
                </div>
            </a>
            <a href="#" className="text w-inline-block">
                <div className="dtext">{text}</div>
            </a>
        </div>
    );
}

export {Description}