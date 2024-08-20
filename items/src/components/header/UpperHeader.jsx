/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { Link } from "react-router-dom";

function UpperHeader() {
  const languageCode = "ru";

  return (
    <div className="upper-header">
      <div className="upper-header__container">
        <div className="upper-header__body">
          <Link to={"/"} className="">
            <img
              src={`https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ab9ca2f2ab9bcb545800d0_${languageCode}_flag%201.png`}
              loading="lazy"
              width="28"
              alt=""
            />
          </Link>
          <nav className="upper-header__links">
            <Link to={"https://www.google.com/search?q=Москва: Пушкина 10"} className="">
              <img
                src={
                  "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ac075c7ff2b0a90938a285_Frame%2057.svg"
                }
                loading="lazy"
                alt=""
                className="image-13"
                width="146"></img>
            </Link>
            <Link to={"/"} className="">
              <img
                src={
                  "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ac075ccc7ace5df3decc38_Frame%2059.svg"
                }
                loading="lazy"
                alt=""
                className="image-15"
                width="146"></img>
            </Link>
            <Link to={"/"} className="">
              <img
                src={
                  "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ac075d91c10ccd8f33ab55_Frame%2060.svg"
                }
                loading="lazy"
                alt=""
                className="image-16"
                width="146"></img>
            </Link>
            <Link to={"/"} className="">
              <img
                src={
                  "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ac075d4268cdeb3e1b932b_Frame%2058.svg"
                }
                loading="lazy"
                alt=""
                className="image-17"
                width="146"></img>
            </Link>
            <Link to={"/"} className="">
              <img
                src={
                  "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ac0942c38b3626c742bb6d_Frame%2062.svg"
                }
                loading="lazy"
                alt=""
                className="image-18"
                width="146"></img>
            </Link>
            <Link to={"/"} className="">
              <img
                src={
                  "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ac0959a3dcc14d67211117_Frame%2061.svg"
                }
                loading="lazy"
                alt=""
                className="image-19"
                width="146"></img>
            </Link>
          </nav>
          <button className="theme w-inline-block">
            <div className="tbtn">
              <div className="bcircle">
                <img
                  src="https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66abb9ed01d209024e1aff31_sun%203.svg"
                  loading="lazy"
                  width="13"
                  alt=""
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpperHeader;
