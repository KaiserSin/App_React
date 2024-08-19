import React, { useState } from "react";

import { Arrow } from "./Arrow/Arrow.jsx";

import "./Slider.scss";

export const Slider = () => {
  const [slideNumber, setSlideNumber] = useState(1);
  return (
    <section className="adsection">
      <div className="slider">
        <Arrow className="arrow__left"></Arrow>
        <Arrow className="arrow__right"></Arrow>
        <div className="slider__mask">
          <div className="slide__item first"></div>
          <div className="slide__item second"></div>
        </div>
      </div>
    </section>
  );
};
