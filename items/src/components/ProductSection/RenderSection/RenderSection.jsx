import React from 'react';
import { RenderGrid } from '../RenderGrid/RenderGrid';
import './RenderSection.scss';

const RenderSec = ({ products }) => {
  const grids = RenderGrid({ products });

  let answer = [];

  if (grids.length > 0) {
    answer.push(
      <section id="itemssec" key="itemssec" className="itemssection">
        <div id="itemsbg" key="itemsbg" className="itemsbg">
          {grids[0]}
        </div>
      </section>
    );
  }

  if (grids.length === 2) {
    answer.push(
      <section id="itemssec2" key="itemssec2" className="itemssection">
        <div id="itemsbg2" key="itemsbg2" className="itemsbg">
          {grids[1]}
        </div>
      </section>
    );
  }

  if (grids.length > 2) {
    answer.push(
      <section id="itemssec2" key="itemssec2" className="itemssection">
        <div id="itemsbg2" key="itemsbg2" className="itemsbg">
          {grids.slice(1, 3)}
        </div>
      </section>
    );

    if (grids.length > 3) {
      answer.push(
        <section id="itemssec3" key="itemssec3" className="itemssection">
          <div id="itemsbg3" key="itemsbg3" className="itemsbg">
            {grids.slice(3)}
          </div>
        </section>
      );
    }
  }

  return answer;
};

export { RenderSec };
