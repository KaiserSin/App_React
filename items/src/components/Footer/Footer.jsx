import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__text">
          2023-2024 ©SwiftMart — онлайн маркетплейс. Все права защищены. Доставка по всей России и странам СНГ. На Торговой площадке SwiftMart применяются рекомендательные технологии. Адрес для направления юридически значимых сообщений: 
          <a href="mailto:legal@swiftmart.ru" className="footer__link"> legal@swiftmart.ru</a>
        </div>
        <div className="footer__info">
          <div className="footer__support">
            <div className="footer__support-title">Поддержка</div>
            <div className="footer__support-contact">
              Горячая линия: <a href="tel:+7(800)222-22-22" className="footer__link"> +7 (800) 222-22-22</a>
            </div>
            <div className="footer__support-contact">
              Email: <a href="mailto:support@swiftmart.ru" className="footer__link"> support@swiftmart.ru</a>
            </div>
          </div>
          <div className="footer__qr">
            <a href="#" className="footer__qr-link">
              <img
                src="https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ac2a52450e2ad9e7051e04_Frame%2064.png"
                loading="lazy"
                width="77"
                alt="QR Code"
                className="footer__qr-image"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


  