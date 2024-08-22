import { userInfo } from "../Constants/User-info";
export const User = () => {
  return (
    <div>
      <img src="/profile-images/user.png" alt="" className="profile__images" />
      <div>
        <div>
          <h2>Учетные данные</h2>
          <p>
            Здесь вы можете редактировать свои данные Swift ID и управлять
            аккаунтом.
          </p>
          <div>
            <div className="user__info-block">
              <h3>ФИО</h3>
              <span>
                {userInfo.firstName} {userInfo.lastName} {userInfo.surname}
              </span>
              <button className="change__button">Изменить</button>
            </div>
            <div className="user__info-block">
              <span>{userInfo.dateOfBirth}</span>
              <button className="change__button">Изменить</button>
            </div>
            <div className="user__info-block">
              <span>{userInfo.sex}</span>
              <button className="change__button">Изменить</button>
            </div>
            <div className="user__info-block">
              <span>{userInfo.email}</span>
              <button className="change__button">Изменить</button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
