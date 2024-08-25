import "./User-security.scss";

export const UserSecurity = () => {
  return (
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
            <button className="delete__account-button">Удалить аккаунт</button>
          </div>
        </div>
      </div>
    </div>
  );
};
