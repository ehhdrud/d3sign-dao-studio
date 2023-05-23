import React from "react";
import Carousel from "./Carousel";
import "../../../../styles/artistPage.css";

const imagePaths = [
  require("../../../../images/arts/Paul0/Paul0-00.png"),
  require("../../../../images/arts/Paul0/Paul0-01.png"),
  require("../../../../images/arts/Paul0/Paul0-02.png"),
  require("../../../../images/arts/Paul0/Paul0-03.png"),
  require("../../../../images/arts/Paul0/Paul0-04.png"),
  require("../../../../images/arts/Paul0/Paul0-05.png"),
  require("../../../../images/arts/Paul0/Paul0-06.png"),
];

export default function Paul0() {
  return (
    <div className="artist-page-container">
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
