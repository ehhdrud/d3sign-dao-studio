import React from "react";
import Carousel from "./Carousel";
import "../../../../styles/artistPage.css";

const imagePaths = [
  require("../../../../images/arts/ZER1/ZER1-00.png"),
  require("../../../../images/arts/ZER1/ZER1-01.png"),
  require("../../../../images/arts/ZER1/ZER1-02.png"),
  require("../../../../images/arts/ZER1/ZER1-03.png"),
  require("../../../../images/arts/ZER1/ZER1-04.png"),
];

export default function ZER1() {
  return (
    <div className="artist-page-container">
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
