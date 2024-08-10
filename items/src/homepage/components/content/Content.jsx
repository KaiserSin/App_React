import { RenderSec } from "./product/RenderSec";
import AdSectionTwo from "./ad/AdSectionTwo";
import AdSectionThree from "./ad/AdSectionThree";

const Content = ({products, progress}) =>{
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

export {Content}