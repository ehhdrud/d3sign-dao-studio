import React from "react";
import Carousel from "./Carousel.js";
import "../../../../styles/artistPage.css";

const imagePaths = [
  require("../../../../images/arts/MIRR0R/MIRR0R-00.png"),
  require("../../../../images/arts/MIRR0R/MIRR0R-01.png"),
  require("../../../../images/arts/MIRR0R/MIRR0R-02.png"),
  require("../../../../images/arts/MIRR0R/MIRR0R-03.png"),
  require("../../../../images/arts/MIRR0R/MIRR0R-04.png"),
  require("../../../../images/arts/MIRR0R/MIRR0R-05.png"),
];

export default function MIRR0R() {
  return (
    <div className="artist-page-container">
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
