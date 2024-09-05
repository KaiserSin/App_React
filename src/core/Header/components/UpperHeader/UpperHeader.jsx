/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import { useState } from "react";
import { Link } from "react-router-dom";
import Moon from "@assets/images/nightMode/moon.svg";
import map from "@assets/images/map.png";
import openPvz from "@assets/images/open-pvz.png";
import "./UpperHeader.scss";
import "./UpperHeader.mobile.scss";

function UpperHeader() {
  const [isNightMode, setIsNightMode] = useState(false);
  const languageCode = "ru";

  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div className="upper-header">
      <div className="upper-header__container">
        <div className="upper-header__body">
          <div className="upper-header__language">
            <img
              src={`https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ab9ca2f2ab9bcb545800d0_${languageCode}_flag%201.png`}
              loading="lazy"
              width="28"
              alt=""
            />
            <span className="upper-header__link-text">RUB</span>
          </div>
          <nav className="upper-header__links">
            <Link
              to={"https://www.google.com/search?q=Москва: Пушкина 10"}
              className="upper-header__link"
            >
              📍 Плесецкая 6
            </Link>
            <Link to={"/"} className="upper-header__link">
              💼 Наши вакансии
            </Link>
            <Link to={"/"} className="upper-header__link">
              🏢 Покупать как компания
            </Link>
            <Link to={"/"} className="upper-header__link">
              ❤️ Продавайте у нас
            </Link>
            <Link to={"/"} className="upper-header__link">
              <img src={map} alt="map" />
              <span>Карта ПВЗ</span>
            </Link>
            <Link to={"/"} className="upper-header__link">
              <img src={openPvz} alt="" />
              <span>Открыть ПВЗ</span>
            </Link>
          </nav>
          <button className="theme w-inline-block" onClick={toggleTheme}>
            <div className={`tbtn ${isNightMode ? "night" : "day"}`}>
              <div className="bcircle">
                <img
                  src={
                    isNightMode
                      ? Moon
                      : "https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66abb9ed01d209024e1aff31_sun%203.svg"
                  }
                  loading="lazy"
                  width="13"
                  alt={isNightMode ? "Moon" : "Sun"}
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
