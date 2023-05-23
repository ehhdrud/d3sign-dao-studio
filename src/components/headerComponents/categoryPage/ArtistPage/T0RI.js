import React from "react";
import Carousel from "./Carousel.js";
import "../../../../styles/artistPage.css";

const imagePaths = [
  require("../../../../images/arts/T0RI/T0RI-00.png"),
  require("../../../../images/arts/T0RI/T0RI-01.png"),
  require("../../../../images/arts/T0RI/T0RI-02.png"),
  require("../../../../images/arts/T0RI/T0RI-03.png"),
  require("../../../../images/arts/T0RI/T0RI-04.png"),
  require("../../../../images/arts/T0RI/T0RI-05.png"),
];

export default function T0RI() {
  return (
    <div className="artist-page-container">
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
