import React, { useContext } from "react";
import { ToggleContext } from "../../../../ToggleContext";
import Carousel from "./Carousel";
import image1 from "../../../../images/arts/J1N/J1N-00.png";
import image2 from "../../../../images/arts/J1N/J1N-01.png";
import image3 from "../../../../images/arts/J1N/J1N-02.png";
import image4 from "../../../../images/arts/J1N/J1N-03.png";
import image5 from "../../../../images/arts/J1N/J1N-04.png";
import image6 from "../../../../images/arts/J1N/J1N-05.png";
import "../../../../styles/artsAndArtistsPage.css";

const imagePaths = [image1, image2, image3, image4, image5, image6];

export default function J1N() {
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
      <h1 className="artist-page-title">J1N's Artwork</h1>
      <p className="description">
        Abstract paintings by J1N explore emotion and motion via vivid colors,
        organic forms, and unplanned brushstrokes. J1N's art enables viewers to
        go on a special, sensual trip by overcoming the limitations of
        conventional representation.
      </p>
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
