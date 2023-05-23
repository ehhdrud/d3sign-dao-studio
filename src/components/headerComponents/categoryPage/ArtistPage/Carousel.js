import React from "react";
import Slider from "react-slick";
import "../../../../styles/Carousel.css";

export default function Carousel({ imagePaths }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {imagePaths.map((imagePath, index) => (
        <div className="carousel-img-container" key={index}>
          <img
            className="carousel-img"
            src={imagePath}
            alt={`Image ${index}`}
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      ))}
    </Slider>
  );
}
