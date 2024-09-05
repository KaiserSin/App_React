import { RenderGrid } from "../RenderGrid/RenderGrid";

import "./RenderSection.scss";
import "./RenderSection.mobile.scss";
import { useMediaQuery } from "react-responsive";

const RenderSec = ({ products }) => {
  const grids = RenderGrid({ products });
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  let answer = [];

  if (grids.length > 0) {
    answer.push(
      <section key="itemssec" className="itemssection">
        <div key="itemsbg" className="itemsbg">
          {grids[0]}
        </div>
      </section>
    );
  }

  if (grids.length === 2) {
    answer.push(
      <section key="itemssec2" className="itemssection">
        <div key="itemsbg2" className="itemsbg">
          {grids[1]}
        </div>
      </section>
    );
  }

  if (grids.length > 2) {
    answer.push(
      <section key="itemssec2" className="itemssection">
        <div key="itemsbg2" className="itemsbg">
          {grids.slice(1, 3)}
        </div>
      </section>
    );

    if (grids.length > 4) {
      answer.push(
        <section key="itemssec3" className="itemssection">
          <div key="itemsbg3" className="itemsbg">
            {grids.slice(isMobile ? 3 : 7)}
          </div>
        </section>
      );
    }
  }

  return answer;
};

export { RenderSec };
