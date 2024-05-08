import React, { useState, useEffect } from 'react';
import './Carousel.css'

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const divContents = [
    "Enhance fortune 50 company’s insights teams research capabilities",
    "Reduction in project execution time by optimising team availability",
    "Reduced client expenses by saving on hiring and employee costs."
  ];
  const divCount = divContents.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % divCount);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [divCount]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel">
      <div className="div-container">
        {divContents.map((content, index) => (
          <div
            key={index}
            className={`div ${index === activeIndex ? 'active' : 'hidden'}`}
          >
            <h1>{content}</h1>
          </div>
        ))}
      </div>
      <div className="dots">
        {divContents.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
