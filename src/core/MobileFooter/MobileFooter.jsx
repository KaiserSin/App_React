import IconWithNotification from "@shared/components/IconWithNotification/IconWithNotification";
import "./MobileFooter.scss";
import { MobileFooterItems } from "../Constants/MobileFooterItems";
import { Link } from "react-router-dom";

export const MobileFooter = () => {
  return (
    <footer className="mobile-footer">
      <div className="mobile-footer__icons">
        {MobileFooterItems.map((item, index) =>
          item.notificationCount ? (
            <Link key={index} to={item.link}>
              <IconWithNotification
                key={index}
                classes={{ image: "mobile-footer__icon" }}
                src={item.iconSrc}
                notificationCount={item.notificationCount}
              />
            </Link>
          ) : (
            <Link key={index} to={item.link}>
              <img
                src={item.iconSrc}
                alt={item.iconSrc}
                className="mobile-footer__icon"
              />
            </Link>
          )
        )}
      </div>
    </footer>
  );
};
