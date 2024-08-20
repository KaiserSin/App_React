import { RenderSec } from "./product/RenderSec";
import AdSectionTwo from "./ad/AdSectionTwo";
import AdSectionThree from "./ad/AdSectionThree";
import Catalog from "../../../components/catalog/Catalog";

const Content = ({products, progress}) =>{
    const sections = RenderSec({products});
    let showCatalog = true;
    if (showCatalog) {
      return(
        <div id='content' className='content'>
          <Catalog/>
        </div>
      )
    } else {
      return(
        <div id='content' className='content'>
          {sections[0]}
          <AdSectionTwo progress={progress}/>
          {sections[1]}
          <AdSectionThree/>
          {sections[2]}
        </div>
      )
    }
}

export {Content}