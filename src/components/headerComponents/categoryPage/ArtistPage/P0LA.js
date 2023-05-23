import React from "react";
import Carousel from "./Carousel";
import "../../../../styles/artistPage.css";

const imagePaths = [
  require("../../../../images/arts/P0LA/P0LA-00.png"),
  require("../../../../images/arts/P0LA/P0LA-01.png"),
  require("../../../../images/arts/P0LA/P0LA-02.png"),
  require("../../../../images/arts/P0LA/P0LA-03.png"),
  require("../../../../images/arts/P0LA/P0LA-04.png"),
];

export default function P0LA() {
  return (
    <div className="artist-page-container">
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
