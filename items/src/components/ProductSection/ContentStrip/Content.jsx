import React from 'react';
import { RenderSec } from "../RenderSection/RenderSection.jsx";
import AdSectionTwo from "../../Advertisement/AdvertisementSectionTwo";
import AdSectionThree from "../../Advertisement/AdvertisementSectionThree";
import './Content.scss';
import { Catalog } from "../../Catalog/Catalog.jsx"
import { SliderSection } from "../../Advertisement/SliderSection.jsx";
import { Profile } from "../../Profile/Profile.jsx";
import { useDisplayProfile } from "../../../context/ProfileContext.jsx";
import ScrollToBottom from '../../ScrollToBottom/ScrollToBottom.jsx';

const Content = ({products, progress, show}) => {
  const sections = RenderSec({products});
  if (show) {
    return(
      <div className='content'>
        <Catalog/>
      </div>
    );
  } else {
    return(
      <div className='content'>
        <SliderSection/>
        {sections[0]}
        <AdSectionTwo progress={progress}/>
        {sections[1]}
        <AdSectionThree/>
        {sections[2]}
        <ScrollToBottom />
      </div>
    );
  }
}

export { Content };
