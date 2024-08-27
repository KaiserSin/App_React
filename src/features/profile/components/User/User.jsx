import { userInfo } from "../../constants/User-info";

import "./User.scss";
import { UserSecurity } from "../UserSecurity/User-security";

export const User = () => {
  return (
    <section className="user">
      <div className="profile__images">
        <img src="/profile-images/user.png" alt="prfile__image" />
      </div>
      <div className="user__info">
        <div className="user__info-title">
          <h2>Учетные данные</h2>
          <p>
            Здесь вы можете редактировать свои данные Swift ID<br></br> и
            управлять аккаунтом.
          </p>
          <div className="user__info-blocks">
            <div className="user__info-block">
              <h3>ФИО</h3>
              <span>
                {userInfo.firstName} {userInfo.lastName} {userInfo.surname}
              </span>
              <button className="change__button">Изменить</button>
            </div>
            <div className="user__info-block">
              <h3>Дата рождения</h3>
              <span>{userInfo.dateOfBirth}</span>
              <button className="change__button">Изменить</button>
            </div>
            <div className="user__info-block">
              <h3>Пол</h3>
              <span>{userInfo.sex}</span>
              <button className="change__button">Изменить</button>
            </div>
            <div className="user__info-block">
              <h3>Почта</h3>
              <div className="email__info">
                <span>{userInfo.email}</span>
                {userInfo.isConfirm ? (
                  <div className="email__confirm">
                    <img src="" alt="" />
                    <span>✅ Почта подтверждена</span>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <button className="change__button">Изменить</button>
            </div>
          </div>
        </div>
        <UserSecurity />
      </div>
    </section>
  );
};
