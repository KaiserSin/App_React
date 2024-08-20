import './ProgressBar.scss';

const ProgressBar = ({ progress }) => {
    document.documentElement.style.setProperty("--pers", `${progress/50 *100}%`);
    return (
      <div className="progressgrid">
        <div className="level">Ваш уровень</div>
        <div className="progress-container">
          <div className="progress-bar"></div>
        </div>
        <div className="leveld">До следующего уровня: {progress}/50 покупок</div>
      </div>
    );
};

export { ProgressBar }

