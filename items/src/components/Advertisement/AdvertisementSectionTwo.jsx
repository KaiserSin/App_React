import LevelBlock from "../ProgressBar/LevelBlock";
import './AdvertisementSectionTwo.scss';

const AdSectionTwo = ({progress}) => {
    return(
        <section id="adsec2" className="adsection2">
            <div id="adgrid" className="w-layout-grid adgrid">
                <LevelBlock progress={progress}/>
                <div id="adblock" className="adblock w-node-_991ac598-3910-cb12-c813-26163bb1414b-117db3f6">
                    <a href="#" className="adlink2 w-inline-block"></a>
                </div>
            </div>
        </section>
    );
}

export default AdSectionTwo;