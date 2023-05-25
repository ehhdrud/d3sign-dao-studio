import React from "react";
import Carousel from "./Carousel";
import image1 from "../../../../images/arts/Paul0/Paul0-00.png";
import image2 from "../../../../images/arts/Paul0/Paul0-01.png";
import image3 from "../../../../images/arts/Paul0/Paul0-02.png";
import image4 from "../../../../images/arts/Paul0/Paul0-03.png";
import image5 from "../../../../images/arts/Paul0/Paul0-04.png";
import image6 from "../../../../images/arts/Paul0/Paul0-05.png";
import image7 from "../../../../images/arts/Paul0/Paul0-06.png";
import "../../../../styles/artistPage.css";

const imagePaths = [image1, image2, image3, image4, image5, image6, image7];

export default function Paul0() {
  return (
    <div className="artist-page-container">
      <h1 className="artist-page-title">🎨 Paul0's Artwork</h1>
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
