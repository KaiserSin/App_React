import LevelBlock from "../ProgressBar/LevelBlock";
import './AdvertisementSectionTwo.scss';


const AdSectionTwo = ({ progress }) => {
    return (
        <section className="ad-section-two">
            <div className="ad-section-two__grid">
                <LevelBlock progress={progress} />
                <div className="ad-section-two__block ad-section-two__block--custom">
                    <a href="#" className="ad-section-two__link"></a>
                </div>
            </div>
        </section>
    );
}

export default AdSectionTwo;


