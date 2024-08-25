import "./ErrorPage.scss";
import Plug from "@assets/images/plug/plug.svg";

const ErrorPage = () => {
  return (
    <div className="placeholder">
      <div className="placeholder__content">
        <img src={Plug} alt="Server Icon" className="placeholder__icon" />
        <p className="placeholder__text">
          <span className="placeholder__text-line">
            Скоро тут что-то будет...
          </span>
          <br />
          <span className="placeholder__text-line">
            Но пока тут ничего нет :)
          </span>
        </p>
        <button
          className="placeholder__button"
          onClick={() => window.history.back()}
        >
          Назад
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
