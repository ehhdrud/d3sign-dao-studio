import React from "react";
import Carousel from "./Carousel";
import image1 from "../../../../images/arts/CHR1S/CHR1S-00.png";
import image2 from "../../../../images/arts/CHR1S/CHR1S-01.png";
import image3 from "../../../../images/arts/CHR1S/CHR1S-02.png";
import image4 from "../../../../images/arts/CHR1S/CHR1S-03.png";
import image5 from "../../../../images/arts/CHR1S/CHR1S-04.png";
import image6 from "../../../../images/arts/CHR1S/CHR1S-05.png";
import image7 from "../../../../images/arts/CHR1S/CHR1S-06.png";
import "../../../../styles/artistPage.css";

const imagePaths = [image1, image2, image3, image4, image5, image6, image7];

export default function CHR1S() {
  return (
    <div className="artist-page-container">
      <h1 className="artist-page-title">
        <box-icon name="edit" color="#ffffff"></box-icon>CHR1S's Artwork
      </h1>
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
