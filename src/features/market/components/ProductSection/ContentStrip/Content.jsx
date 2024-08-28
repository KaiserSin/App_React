import AdSectionThree from "../../Advertisement/AdvertisementSectionThree";
import "./Content.scss";
import AdSectionTwo from "../../Advertisement/AdvertisementSectionTwo";
import { SliderSection } from "../../Advertisement/SliderSection.jsx";
import ScrollToBottom from "../../ScrollToBottom/ScrollToBottom.jsx";
import { RenderSec } from "../RenderSection/RenderSection.jsx";

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
      <ScrollToBottom />
    </div>
  );
};

export { Content };
