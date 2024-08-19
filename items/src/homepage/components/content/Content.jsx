import { RenderSec } from "./product/RenderSec";
import AdSectionTwo from "./ad/AdSectionTwo";
import AdSectionThree from "./ad/AdSectionThree";
import { Slider } from "./ad/slider/Slider";

const Content = ({ products, progress }) => {
  const sections = RenderSec({ products });
  return (
    <div id="content" className="content">
      <Slider />
      {sections[0]}
      <AdSectionTwo progress={progress} />
      {sections[1]}
      <AdSectionThree />
      {sections[2]}
    </div>
  );
};

export { Content };
