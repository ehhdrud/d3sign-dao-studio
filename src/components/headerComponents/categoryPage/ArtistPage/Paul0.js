import React, { useContext } from "react";
import { ToggleContext } from "../../../../ToggleContext";
import Carousel from "./Carousel";
import image1 from "../../../../images/arts/PAUL0/PAUL0-00.png";
import image2 from "../../../../images/arts/PAUL0/PAUL0-01.png";
import image3 from "../../../../images/arts/PAUL0/PAUL0-02.png";
import image4 from "../../../../images/arts/PAUL0/PAUL0-03.png";
import image5 from "../../../../images/arts/PAUL0/PAUL0-04.png";
import image6 from "../../../../images/arts/PAUL0/PAUL0-05.png";
import image7 from "../../../../images/arts/PAUL0/PAUL0-06.png";
import "../../../../styles/artistPage.css";

const imagePaths = [image1, image2, image3, image4, image5, image6, image7];

export default function PAUL0() {
  const { deleteCategoryLayout } = useContext(ToggleContext);

  const handleClick = (event) => {
    deleteCategoryLayout(event);
  };

  return (
    <div className="artist-page-container" onClick={handleClick}>
      <h1 className="artist-page-title">
        <box-icon name="palette" type="solid" color="#ffffff"></box-icon>PAUL0's
        Artwork
      </h1>
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
