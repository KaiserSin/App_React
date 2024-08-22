import React from "react";

import "./IconWithNotification.scss";

const IconWithNotification = (props) => {
  const { classes, src, notificationCount } = props;
  return (
    <div className={`notification-icon ${classes?.root ? classes.root : ""}`}>
      <img className={`notification-icon__image ${classes?.image ? classes.image : ""}`} src={src} alt="Icon" />
      {notificationCount && (
        <div className="notification-icon__count">{+notificationCount < 10 ? notificationCount : "9+"}</div>
      )}
    </div>
  );
};

export default IconWithNotification;
