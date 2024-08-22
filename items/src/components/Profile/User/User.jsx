import { userInfo } from "../Constants/User-info";

import "./User.scss";

export const User = () => {
  return (
    <div className="user">
      <div className="profile__images">
        <img src="/profile-images/user.png" alt="" />
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
        <div className="user__safety">
          <div className="user__info-title">
            <h2>Безопасность </h2>
            <p>
              Управляйте настройками двухфакторной <br />
              аутентификации, активными сессиями и паролем.
            </p>
          </div>
          <div className="bottom__blocks">
            <div className="botttom__block">
              <div className="content__block">
                <div className="password">
                  <img src="/profile-images/shieldIcon.png" alt="" />
                  <span>Пароль</span>
                </div>
                <div className="safe-password">Надежный пароль</div>
              </div>
              <button className="check__botton">Проверка на утечки</button>
            </div>
            <button className="change__button">Изменить</button>
            <div>
              <div className="botttom__block">
                <div className="content__block">
                  <div>
                    <div className="password">
                      <img src="/profile-images/shieldsIcon.png" alt="" />
                      <span>2FA Защита</span>
                    </div>
                  </div>
                  <div className="sms__block">
                    <span>СМС Сообщение</span>
                    <img src="/profile-images/toBottomIcon.png" alt="" />
                  </div>
                </div>
                <button className="delete__account-button">
                  Удалить аккаунт
                </button>
              </div>
            </div>
          </div>
          <div className="buttons__block"></div>
        </div>
      </div>
    </div>
  );
};
