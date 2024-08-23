import React from "react";
import AdSectionThree from "../../Advertisement/AdvertisementSectionThree";
import AdSectionTwo from "../../Advertisement/AdvertisementSectionTwo";
import { SliderSection } from "../../Advertisement/SliderSection.jsx";
import { Catalog } from "../../Catalog/Catalog.jsx";
import ScrollToBottom from "../../ScrollToBottom/ScrollToBottom.jsx";
import { RenderSec } from "../RenderSection/RenderSection.jsx";


const Content = ({ products, progress, show }) => {
  const sections = RenderSec({ products });

  return (
    <>
      <SliderSection />
      {sections[0]}
      <AdSectionTwo progress={progress} />
      {sections[1]}
      <AdSectionThree />
      {sections[2]}
      <ScrollToBottom />
    </>
  );
};

export { Content };
