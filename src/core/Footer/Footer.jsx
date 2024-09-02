import { Link } from "react-router-dom";
import "./Footer.scss";

import Button from "@shared/components/Buttons/Button/Button";
import { footerLinks } from "@shared/composables/constants/constant";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer-main-info">
          <div className="footer-main-info__text">
            2023-2024 © SwiftMart — онлайн маркетплейс. Все права защищены. Доставка по всей России и странам СНГ. На
            Торговой площадке SwiftMart применяются рекомендательные технологии. Адрес для направления юридически
            значимых сообщений: legal@swiftmart.ru
          </div>
          <div className="footer-socials">
            <a href="#" className="footer-socials__item">
              <img className="footer-socials__img" src="/icons/telegram.svg" alt="social icon" />
            </a>
            <a href="#" className="footer-socials__item">
              <img className="footer-socials__img" src="/icons/in.svg" alt="social icon" />
            </a>
            <a href="#" className="footer-socials__item">
              <img className="footer-socials__img" src="/icons/x.svg" alt="social icon" />
            </a>
            <a href="#" className="footer-socials__item">
              <img className="footer-socials__img" src="/icons/youtube.svg" alt="social icon" />
            </a>
          </div>
          <div className="footer__alt-project">Проект компании Alt</div>
        </div>
        <div className="footer-links">
          {footerLinks.map((column) => {
            return (
              <div key={column.title} className="footer-links__item">
                <div className="footer-links__title">{column.title}</div>
                <ul className="footer-links-list">
                  {column.links.map((link) => {
                    return (
                      <li key={link.text} className="footer-links-list__item">
                        <Link to={link.to}>{link.text}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="footer-secondary-info">
          <div className="footer-support">
            <div className="footer-secondary-info__contacts">
              <div className="footer-support__title">Поддержка</div>
              <div className="footer-support__item">
                Горячая линия:
                <a className="footer-support__link" href="tel:+79222222222">
                  +7 (922) 222-22-22
                </a>
              </div>
              <div className="footer-support__item">
                Email:
                <a className="footer-support__link" href="mailto:support@swiftmart.ru">
                  support@swiftmart.ru
                </a>
              </div>
            </div>
            <div className="footer-secondary-info__qr">
              <img
                className="footer-secondary-info__qr-img"
                src="https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ac2a52450e2ad9e7051e04_Frame%2064.png"
                alt=""
              />
            </div>
          </div>
          <div className="footer-secondary-info__text">
            <p>Проект компании “Alt” (ООО “SwiftMart” дочерняя компания ООО “Alt”).</p>
            <p>Все права защищены</p>
          </div>
          <Button className="footer__visually-impaired">
            Версия для слабовидящих
            <img src="/icons/glasses.svg" alt="" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
