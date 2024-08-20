import './Footer.scss'

const Footer = () => {
    return (
      <footer className="footerblock">
        <div className="footerbg"></div>
        <div className="footer">
          <div className="text-block">
            2023-2024 ©SwiftMart — онлайн маркетплейс. Все права защищены. Доставка по всей России и странам СНГ. На Торговой площадке SwiftMart применяются рекомендательные технологии. Адрес для направления юридически значимых сообщений: 
            <a href="mailto:legal@swiftmart.ru" className="link">legal@swiftmart.ru</a>
          </div>
          <div className="support-block">
            <div className="text-block-2">Поддержка</div>
            <div className="text-block-3">
              Горячая линия: <a href="tel:+7(800)222-22-22" className="link-2">+7 (800) 222-22-22</a>
            </div>
            <div className="text-block-5">
              Email: <a href="mailto:support@swiftmart.ru" className="link-3">support@swiftmart.ru</a>
            </div>
          </div>
          <a href="#" className="link-block-29 w-inline-block">
            <img
              src="https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ac2a52450e2ad9e7051e04_Frame%2064.png"
              loading="lazy"
              width="77"
              alt=""
              className="qr-code"
            />
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  