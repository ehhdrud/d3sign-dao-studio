import React from "react";
import Carousel from "./Carousel";
import image1 from "../../../../images/arts/P0LA/P0LA-00.png";
import image2 from "../../../../images/arts/P0LA/P0LA-01.png";
import image3 from "../../../../images/arts/P0LA/P0LA-02.png";
import image4 from "../../../../images/arts/P0LA/P0LA-03.png";
import image5 from "../../../../images/arts/P0LA/P0LA-04.png";
import "../../../../styles/artistPage.css";

const imagePaths = [image1, image2, image3, image4, image5];

export default function P0LA() {
  return (
    <div className="artist-page-container">
      <h1 className="artist-page-title">P0LA's Artwork</h1>
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
