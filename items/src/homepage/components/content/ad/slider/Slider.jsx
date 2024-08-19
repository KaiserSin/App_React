import React, { useState, useEffect } from "react";

import { Arrow } from "./Arrow/Arrow.jsx";

import "./Slider.scss";

const SLIDER_INTERVAL_TIME = 5000;

export const Slider = () => {
  const [slideNumber, setSlideNumber] = useState(0);

  const slides = ["first", "second"];

  const handleNext = () => {
    setSlideNumber((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setSlideNumber((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, SLIDER_INTERVAL_TIME);
    return () => clearInterval(interval);
  }, [slideNumber]);

  return (
    <div className="slider">
      <Arrow className="arrow__left" onClick={handlePrev}>
        
      </Arrow>
      <Arrow className="arrow__right" onClick={handleNext}>
        
      </Arrow>
      <div className="slider__mask">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide__item ${slide} ${
              index === slideNumber ? "active" : ""
            }`}
          >
            <a href="#" className="slider__link"></a>
          </div>
        ))}
      </div>
    </div>
  );
};
