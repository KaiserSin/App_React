import { sessions } from "../../constants/Sessions";

import "./Session.scss";
export const Session = () => {
  return (
    <div className="sessions">
      <div className="sessions__title">
        <h2>Активные сессии</h2>
        <p>
          Здесь отображаются Ваши <br></br> текущие сессии
        </p>
      </div>
      <div className="sessions__wrapper">
        {sessions.map((session) => (
          <div key={session.id} className="session">
            <img
              src={session.browserIcon}
              alt="browser"
              width={35}
              height={35}
            />
            <div className="session__info">
              <span>{session.ip}</span>
              {session.isCurrent ? <span> - Текущая</span> : ""}
              <div className="session__aditional-info">
                {session.os}, {session.country}
              </div>
            </div>
            <button className="session__button">Выйти</button>
          </div>
        ))}
      </div>
    </div>
  );
};
