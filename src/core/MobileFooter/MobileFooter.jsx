import React from "react";
import IconWithNotification from "@shared/components/IconWithNotification/IconWithNotification";
import { icons } from "../../assets/mobileFooterIcons/icons";
import "./MobileFooter.scss";

export const MobileFooter = () => {
  return (
    <footer className="mobile-footer">
      <div className="mobile-footer__icons">
        {icons.map((icon, index) =>
          icon.notificationCount ? (
            <IconWithNotification
              key={index}
              classes={{ image: "mobile-footer__icon" }}
              src={icon.src}
              notificationCount={icon.notificationCount}
            />
          ) : (
            <img
              key={index}
              src={icon.src}
              alt={icon.alt}
              className="mobile-footer__icon"
            />
          )
        )}
      </div>
    </footer>
  );
};
