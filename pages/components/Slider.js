import { useState } from "react";

const Slider = ({ onSlideClick, activeSlide}) => {
  const handleSlideClick = (index) => {
    onSlideClick(index);
  };

  const renderSlides = () => {
    const slides = [];
    for (let i = 1; i <= 4; i++) {
      slides.push(
        <div
          key={i}
          onClick={() => handleSlideClick(i)}
          className={activeSlide === i ? "slide on" : "slide"}
          >
          {i}
        </div>
      );
    }
    return slides;
  };

  return (
    <div className="slider">
      {renderSlides()}
    </div>
  );
};

export default Slider;
