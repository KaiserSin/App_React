import { RenderSec } from "./product/RenderSec";
import AdSectionTwo from "./ad/AdSectionTwo";
import AdSectionThree from "./ad/AdSectionThree";
import { Slider } from "./ad/slider/Slider";
import { AdSectionOne } from "./ad/AddSectionOne";

const Content = ({ products, progress }) => {
  const sections = RenderSec({ products });
  return (
    <div id="content" className="content">
      {sections[0]}
      <AdSectionOne />
      {sections[1]}
      <AdSectionTwo progress={progress} />
      {sections[2]}
      <AdSectionThree />
    </div>
  );
};

export { Content };
