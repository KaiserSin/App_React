import "../../../../assets/index.css";

const ProgressBar = ({ progress }) => {
  document.documentElement.style.setProperty(
    "--pers",
    `${(progress / 50) * 100}%`
  );
  return (
    <div className="w-layout-grid progressgrid">
      <div
        id="w-node-b6b99931-7235-2d3b-6c25-7087500e573c-117db3f6"
        className="level"
      >
        Ваш уровень
      </div>
      <div
        className="progress-container"
        id="w-node-_92b06730-1864-fa31-2a45-dce5c84f9407-117db3f6"
      >
        <div className="progress-bar"></div>
      </div>
      <div
        id="w-node-f98d2631-eb67-63df-1c24-328bd9b47340-117db3f6"
        className="leveld"
      >
        До следующего уровня: {progress}/50 покупок
      </div>
    </div>
  );
};

export { ProgressBar };
