import React from "react";
import Carousel from "./Carousel";
import "../../../../styles/artistPage.css";

const imagePaths = [
  require("../../../../images/arts/R0RO/R0RO-00.png"),
  require("../../../../images/arts/R0RO/R0RO-01.png"),
  require("../../../../images/arts/R0RO/R0RO-02.png"),
  require("../../../../images/arts/R0RO/R0RO-03.png"),
  require("../../../../images/arts/R0RO/R0RO-04.png"),
];

export default function R0RO() {
  return (
    <div className="artist-page-container">
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
