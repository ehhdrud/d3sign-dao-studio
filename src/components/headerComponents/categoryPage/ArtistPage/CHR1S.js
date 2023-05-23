import React from "react";
import Carousel from "./Carousel.js";
import "../../../../styles/artistPage.css";

const imagePaths = [
  require("../../../../images/arts/CHR1S/CHR1S-00.png"),
  require("../../../../images/arts/CHR1S/CHR1S-01.png"),
  require("../../../../images/arts/CHR1S/CHR1S-02.png"),
  require("../../../../images/arts/CHR1S/CHR1S-03.png"),
  require("../../../../images/arts/CHR1S/CHR1S-04.png"),
  require("../../../../images/arts/CHR1S/CHR1S-05.png"),
  require("../../../../images/arts/CHR1S/CHR1S-06.png"),
];

export default function CHR1S() {
  return (
    <div className="artist-page-container">
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
