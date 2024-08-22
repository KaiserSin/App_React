import React from 'react';
import { RenderSec } from "../RenderSection/RenderSection.jsx";
import AdSectionTwo from "../../Advertisement/AdvertisementSectionTwo";
import AdSectionThree from "../../Advertisement/AdvertisementSectionThree";
import "./Content.scss";
import { SliderSection } from "../../Advertisement/SliderSection.jsx";
import { Profile } from "../../Profile/Profile.jsx";
import { useDisplayProfile } from "../../../context/ProfileContext.jsx";

const Content = ({ products, progress }) => {
  const sections = RenderSec({ products });
  return (
    <div className="content">
      <SliderSection />
      {sections[0]}
      <AdSectionTwo progress={progress} />
      {sections[1]}
      <AdSectionThree />
      {sections[2]}
    </div>
  );
};

export { Content };
