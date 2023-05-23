import React from "react";
import "../../../../styles/Carousel.css";

export default function Carousel({ imagePaths }) {
  return (
    <div className="carousel">
      <div className="carousel-container">
        {imagePaths.map((imagePath, index) => (
          <img
            className={`carousel-item carousel-item-${index + 1}`}
            src={imagePath}
            data-index={`${index + 1}`}
            alt={`${index + 1}`}
          />
        ))}
      </div>
      <div className="carousel-controls"></div>
    </div>
  );
}
