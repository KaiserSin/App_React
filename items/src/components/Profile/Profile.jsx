import "./Profile.scss";

import { profileMenuItems } from "./Constants/Profile-menu-items";
import { useState } from "react";
import { Session } from "./Session/Session";
import { User } from "./User/User";

export const Profile = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="profile__section">
      <div className="profile__menu">
        {profileMenuItems.map((item) => (
          <div
            key={item.id}
            className={`profile__menu-item ${
              activeId === item.id ? "active" : ""
            }`}
            onClick={() => setActiveId(item.id)}
          >
            <img src={item.iconSrc} alt="" />
            <div>{item.name}</div>
          </div>
        ))}
      </div>
      <User />
      <Session />
    </section>
  );
};
