import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css'; // External CSS file for styling

const Carousel = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div
          ref={containerRef}
          className="slides-container"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`slide-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
