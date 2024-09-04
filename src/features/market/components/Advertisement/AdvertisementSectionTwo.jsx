import LevelBlock from "../ProgressBar/LevelBlock";
import "./AdvertisementSectionTwo.scss";
import "./AdvertisementSectionTwo.mobile.scss";
import { Link } from "react-router-dom";

const AdSectionTwo = ({ progress }) => {
  return (
    <section className="ad-section-two">
      <div className="ad-section-two__grid">
        <LevelBlock progress={progress} />
        <div className="ad-section-two__block ad-section-two__block--custom">
          <Link to="/inactive-link" className="ad-section-two__link"></Link>
        </div>
      </div>
    </section>
  );
};

export default AdSectionTwo;
