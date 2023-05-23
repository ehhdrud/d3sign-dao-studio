import React from "react";
import Carousel from "./Carousel.js";
import "../../../../styles/artistPage.css";

const imagePaths = [
  require("../../../../images/arts/R1N/R1N-00.png"),
  require("../../../../images/arts/R1N/R1N-01.png"),
  require("../../../../images/arts/R1N/R1N-02.png"),
  require("../../../../images/arts/R1N/R1N-03.png"),
  require("../../../../images/arts/R1N/R1N-04.png"),
];

export default function R1N() {
  return (
    <div className="artist-page-container">
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
