import IconWithNotification from "@shared/components/IconWithNotification/IconWithNotification";
import { useLocation, useNavigate } from "react-router-dom";
import { MobileFooterItems } from "../Constants/MobileFooterItems";
import "./MobileFooter.scss";

export const MobileFooter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (pathname) => {
    if (location.pathname === pathname) {
      navigate("/");
    } else {
      navigate(pathname);
    }
  };

  return (
    <footer className="mobile-footer">
      <div className="mobile-footer__icons">
        {MobileFooterItems.map((item, index) => {
          return item.notificationCount ? (
            <button key={index} onClick={() => handleClick(item.link)}>
              <IconWithNotification
                classes={{ image: "mobile-footer__icon" }}
                src={item.iconSrc}
                notificationCount={item.notificationCount}
              />
            </button>
          ) : (
            <button
              key={index}
              onClick={() => handleClick(item.link)}
              className="mobile-footer__icon-button"
            >
              <img
                src={item.iconSrc}
                alt={item.alt}
                className="mobile-footer__icon"
              />
            </button>
          );
        })}
      </div>
    </footer>
  );
};
