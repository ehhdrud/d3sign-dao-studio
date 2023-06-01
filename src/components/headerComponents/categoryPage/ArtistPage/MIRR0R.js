import React, { useContext } from "react";
import { ToggleContext } from "../../../../ToggleContext";
import Carousel from "./Carousel";
import image1 from "../../../../images/arts/MIRR0R/MIRR0R-00.png";
import image2 from "../../../../images/arts/MIRR0R/MIRR0R-01.png";
import image3 from "../../../../images/arts/MIRR0R/MIRR0R-02.png";
import image4 from "../../../../images/arts/MIRR0R/MIRR0R-03.png";
import image5 from "../../../../images/arts/MIRR0R/MIRR0R-04.png";
import image6 from "../../../../images/arts/MIRR0R/MIRR0R-05.png";
import "../../../../styles/artistPage.css";

const imagePaths = [image1, image2, image3, image4, image5, image6];

export default function MIRR0R() {
  const { deleteCategoryLayout } = useContext(ToggleContext);

  const handleClick = (event) => {
    deleteCategoryLayout(event);
  };

  return (
    <div className="artist-page-container" onClick={handleClick}>
      <h1 className="artist-page-title">
        <box-icon name="palette" type="solid" color="#ffffff"></box-icon>
        MIRR0R's Artwork
      </h1>
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
