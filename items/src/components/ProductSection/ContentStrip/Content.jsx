// import { RenderSec } from "./product/RenderSec";
import { RenderSec } from "../RenderSection/RenderSection.jsx";
import AdSectionTwo from "../../Advertisement/AdvertisementSectionTwo";
import AdSectionThree from "../../Advertisement/AdvertisementSectionThree";
import './Content.scss';


const Content = ({products, progress}) => {
  const sections = RenderSec({products});
  return(
  <div id='content' className='content'>
    {sections[0]}
    <AdSectionTwo progress={progress}/>
    {sections[1]}
    <AdSectionThree/>
    {sections[2]}
  </div>
  );
}

export  {Content}