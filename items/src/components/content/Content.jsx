import { RenderSec } from "./product/RenderSec";
import { SliderSection } from "./ad/SliderSection";
import AdSectionTwo from "./ad/AdSectionTwo";
import AdSectionThree from "./ad/AdSectionThree";

const Content = ({ products, progress }) => {
  const sections = RenderSec({ products });
  return (
    <div id="content" className="content">
      {sections[0]}
      <SliderSection />
      {sections[1]}
      <AdSectionTwo progress={progress} />
      {sections[2]}
      <AdSectionThree />
    </div>
  );
};

export { Content };
