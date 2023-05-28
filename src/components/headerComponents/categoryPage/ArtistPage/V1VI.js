import React from "react";
import Carousel from "./Carousel";
import image1 from "../../../../images/arts/V1VI/V1VI-00.png";
import image2 from "../../../../images/arts/V1VI/V1VI-01.png";
import image3 from "../../../../images/arts/V1VI/V1VI-02.png";
import image4 from "../../../../images/arts/V1VI/V1VI-03.png";
import image5 from "../../../../images/arts/V1VI/V1VI-04.png";
import image6 from "../../../../images/arts/V1VI/V1VI-05.png";
import "../../../../styles/artistPage.css";

const imagePaths = [image1, image2, image3, image4, image5, image6];

export default function V1VI() {
  return (
    <div className="artist-page-container">
      <h1 className="artist-page-title">
        <box-icon name="edit" color="#ffffff"></box-icon>V1VI's Artwork
      </h1>
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
