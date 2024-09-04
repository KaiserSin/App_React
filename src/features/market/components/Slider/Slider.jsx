import { useState, useEffect } from "react";
import { Arrow } from "@shared/components/Arrow/Arrow";
import { Link } from "react-router-dom";
import "./Slider.scss";
import "./Slider.mobile.scss";

import leftArrow from "@assets/images/LeftArrow.svg";
import rightArrow from "@assets/images/RightArrow.svg";

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
        <img src={leftArrow} alt="" />
      </Arrow>
      <Arrow className="arrow__right" onClick={handleNext}>
        <img src={rightArrow} alt="" />
      </Arrow>
      <div className="slider__mask">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide__item ${slide} ${
              index === slideNumber ? "active" : ""
            }`}
          >
            <Link to="/inactive-link" className="slider__link"></Link>
          </div>
        ))}
      </div>
    </div>
  );
};
