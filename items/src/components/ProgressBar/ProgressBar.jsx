import './ProgressBar.scss';

const ProgressBar = ({ progress }) => {
  document.documentElement.style.setProperty("--pers", `${progress / 50 * 100}%`);
  return (
      <div className="progress-bar-block">
          <div className="progress-bar-block__level">Ваш уровень</div>
          <div className="progress-bar-block__container">
              <div className="progress-bar-block__bar"></div>
          </div>
          <div className="progress-bar-block__description">
              До следующего уровня: {progress}/50 покупок
          </div>
      </div>
  );
};

export { ProgressBar };




