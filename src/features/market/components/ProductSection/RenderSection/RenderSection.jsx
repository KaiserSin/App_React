import { RenderGrid } from "../RenderGrid/RenderGrid";

import "./RenderSection.scss";
import "./RenderSection.mobile.scss";

const RenderSec = ({ products }) => {
  const grids = RenderGrid({ products });

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
            {grids.slice(3)}
          </div>
        </section>
      );
    }
  }

  return answer;
};

export { RenderSec };
