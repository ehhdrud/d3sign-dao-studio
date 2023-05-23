import React from "react";
import Carousel from "./Carousel";
import "../../../../styles/artistPage.css";

const imagePaths = [
  require("../../../../images/arts/V1VI/V1VI-00.png"),
  require("../../../../images/arts/V1VI/V1VI-01.png"),
  require("../../../../images/arts/V1VI/V1VI-02.png"),
  require("../../../../images/arts/V1VI/V1VI-03.png"),
  require("../../../../images/arts/V1VI/V1VI-04.png"),
  require("../../../../images/arts/V1VI/V1VI-05.png"),
];

export default function V1VI() {
  return (
    <div className="artist-page-container">
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
