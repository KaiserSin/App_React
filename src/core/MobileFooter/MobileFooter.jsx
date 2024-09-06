import IconWithNotification from "@shared/components/IconWithNotification/IconWithNotification";
import "./MobileFooter.scss";
import { MobileFooterItems } from "../Constants/MobileFooterItems";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const MobileFooter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleStripsClick = () => {
    if (location.pathname === "/catalog") {
      navigate("/");
    } else {
      navigate("/catalog");
    }
  };

  const handleCartClick = () => {
    if (location.pathname === "/cart") {
      navigate("/");
    } else {
      navigate("/cart");
    }
  };

  return (
    <footer className="mobile-footer">
      <div className="mobile-footer__icons">
        {MobileFooterItems.map((item, index) => {
          if (item.alt === "Menu") {
            return (
              <button
                key={index}
                onClick={handleStripsClick}
                className="mobile-footer__icon-button"
              >
                <img
                  src={item.iconSrc}
                  alt={item.alt}
                  className="mobile-footer__icon"
                />
              </button>
            );
          } else if (item.alt === "Cart") {
            return (
              <button
                key={index}
                onClick={handleCartClick}
                className="mobile-footer__icon-button"
              >
                <IconWithNotification
                  classes={{ image: "mobile-footer__icon" }}
                  src={item.iconSrc}
                  notificationCount={item.notificationCount}
                />
              </button>
            );
          } else if (item.notificationCount) {
            return (
              <Link key={index} to={item.link}>
                <IconWithNotification
                  classes={{ image: "mobile-footer__icon" }}
                  src={item.iconSrc}
                  notificationCount={item.notificationCount}
                />
              </Link>
            );
          } else {
            return (
              <Link key={index} to={item.link}>
                <img
                  src={item.iconSrc}
                  alt={item.alt}
                  className="mobile-footer__icon"
                />
              </Link>
            );
          }
        })}
      </div>
    </footer>
  );
};
