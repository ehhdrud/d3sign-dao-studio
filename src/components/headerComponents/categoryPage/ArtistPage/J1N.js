import React from "react";
import Carousel from "./Carousel";
import "../../../../styles/artistPage.css";

const imagePaths = [
  require("../../../../images/arts/J1N/J1N-00.png"),
  require("../../../../images/arts/J1N/J1N-01.png"),
  require("../../../../images/arts/J1N/J1N-02.png"),
  require("../../../../images/arts/J1N/J1N-03.png"),
  require("../../../../images/arts/J1N/J1N-04.png"),
  require("../../../../images/arts/J1N/J1N-05.png"),
];

export default function J1N() {
  return (
    <div className="artist-page-container">
      <h1 className="artist-page-title">🎨 J1N's Artwork</h1>
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
