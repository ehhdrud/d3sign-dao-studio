import React, { useContext } from "react";
import { ToggleContext } from "../../../../ToggleContext";
import Carousel from "./Carousel";
import image1 from "../../../../images/arts/R1N/R1N-00.png";
import image2 from "../../../../images/arts/R1N/R1N-01.png";
import image3 from "../../../../images/arts/R1N/R1N-02.png";
import image4 from "../../../../images/arts/R1N/R1N-03.png";
import image5 from "../../../../images/arts/R1N/R1N-04.png";
import "../../../../styles/artistPage.css";

const imagePaths = [image1, image2, image3, image4, image5];

export default function R1N() {
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
      <h1 className="artist-page-title">R1N's Artwork</h1>
      <p className="description">
        A visionary artist who brings life to future cities and mecca girls.
        Their fascinating work mixes the beauty of science fiction with complex
        mechanical and robotic elements. Experience the art of R1N's endless
        possibilities and imaginative creations.
      </p>
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
