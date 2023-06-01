import React, { useContext } from "react";
import { ToggleContext } from "../../../../ToggleContext";
import Carousel from "./Carousel";
import image1 from "../../../../images/arts/R0RO/R0RO-00.png";
import image2 from "../../../../images/arts/R0RO/R0RO-01.png";
import image3 from "../../../../images/arts/R0RO/R0RO-02.png";
import image4 from "../../../../images/arts/R0RO/R0RO-03.png";
import image5 from "../../../../images/arts/R0RO/R0RO-04.png";
import "../../../../styles/artistPage.css";

const imagePaths = [image1, image2, image3, image4, image5];

export default function R0RO() {
  const { deleteCategoryLayout } = useContext(ToggleContext);

  const handleClick = (event) => {
    deleteCategoryLayout(event);
  };

  return (
    <div className="artist-page-container" onClick={handleClick}>
      <h1 className="artist-page-title">
        <box-icon name="palette" type="solid" color="#ffffff"></box-icon>R0RO's
        Artwork
      </h1>
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
