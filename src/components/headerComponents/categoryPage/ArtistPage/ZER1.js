import React, { useContext } from "react";
import { ToggleContext } from "../../../../ToggleContext";
import Carousel from "./Carousel";
import image1 from "../../../../images/arts/ZER1/ZER1-00.png";
import image2 from "../../../../images/arts/ZER1/ZER1-01.png";
import image3 from "../../../../images/arts/ZER1/ZER1-02.png";
import image4 from "../../../../images/arts/ZER1/ZER1-03.png";
import image5 from "../../../../images/arts/ZER1/ZER1-04.png";
import "../../../../styles/artistPage.css";
import "boxicons";

const imagePaths = [image1, image2, image3, image4, image5];
export default function ZER1() {
  const { deleteCategoryLayout, categoryLayoutChanged } =
    useContext(ToggleContext);

  const handleClick = (event) => {
    deleteCategoryLayout(event);
  };

  return (
    <div
      className={`artist-page-container ${
        categoryLayoutChanged ? "rearranged" : ""
      }`}
      onClick={handleClick}
    >
      <h1 className="artist-page-title">ZER1's Artwork</h1>
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
