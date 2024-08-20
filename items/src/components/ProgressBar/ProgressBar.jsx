
import './ProgressBar.scss';

const ProgressBar = ({ progress }) => {
    document.documentElement.style.setProperty("--pers", `${progress/50 *100}%`);
    return (
      <div className="w-layout-grid progressgrid">
        <div  className="level grid-level">Ваш уровень</div>
        <div className="progress-container grid-level2">
          <div className="progress-bar"></div>
        </div>
        <div className="leveld">До следующего уровня: {progress}/50 покупок</div>
      </div>
    );
  };

export {ProgressBar}