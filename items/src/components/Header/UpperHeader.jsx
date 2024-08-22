/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { Link } from "react-router-dom";

function UpperHeader() {
  const languageCode = "ru";

  return (
    <div className="upper-header">
      <div className="upper-header__container">
        <div className="upper-header__body">
          <div to={"/"} className="upper-header__language">
            <img
              src={`https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ab9ca2f2ab9bcb545800d0_${languageCode}_flag%201.png`}
              loading="lazy"
              width="28"
              alt=""
            />
            <span className="upper-header__link-text">{languageCode}</span>
          </div>
          <nav className="upper-header__links">
            <Link to={"https://www.google.com/search?q=Москва: Пушкина 10"} className="upper-header__link">
              🏠 Москва: Пушкина 10
            </Link>
            <Link to={"/"} className="upper-header__link">
              ❤️ Продавайте у нас
            </Link>
            <Link to={"/"} className="upper-header__link">
              💼 Наши вакансии
            </Link>
            <Link to={"/"} className="upper-header__link">
              🏢 Покупать как компания
            </Link>
            <Link to={"/"} className="upper-header__link">
              🔥 Франшиза
            </Link>
            <Link to={"/"} className="upper-header__link">
              📍 Пункты выдачи
            </Link>
            <Link to={"/"} className="upper-header__link">
              🛟 Поддержка
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
