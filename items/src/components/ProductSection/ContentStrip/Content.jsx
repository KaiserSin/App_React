// import { RenderSec } from "./product/RenderSec";
import { RenderSec } from "../RenderSection/RenderSection.jsx";
import AdSectionTwo from "../../Advertisement/AdvertisementSectionTwo";
import AdSectionThree from "../../Advertisement/AdvertisementSectionThree";
import './Content.scss';
import { SliderSection } from "../../Advertisement/SliderSection.jsx";
import { Link } from 'react-router-dom';


const Content = ({products, progress}) => {
  const sections = RenderSec({products});
  return(
  <div className='content'>
    <SliderSection/>
    {sections[0]}
    <AdSectionTwo progress={progress}/>
    {sections[1]}
    <Link to="/inactive-link-3">
        <AdSectionThree />
    </Link>
    {sections[2]}
  </div>
  );
}

export  {Content}