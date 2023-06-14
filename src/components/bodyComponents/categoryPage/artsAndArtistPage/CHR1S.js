import React, { useContext } from "react";
import { ToggleContext } from "../../../../ToggleContext";
import Carousel from "./Carousel";
import image1 from "../../../../images/arts/CHR1S/CHR1S-00.png";
import image2 from "../../../../images/arts/CHR1S/CHR1S-01.png";
import image3 from "../../../../images/arts/CHR1S/CHR1S-02.png";
import image4 from "../../../../images/arts/CHR1S/CHR1S-03.png";
import image5 from "../../../../images/arts/CHR1S/CHR1S-04.png";
import image6 from "../../../../images/arts/CHR1S/CHR1S-05.png";
import image7 from "../../../../images/arts/CHR1S/CHR1S-06.png";
import "../../../../styles/artsAndArtistsPage.css";

const imagePaths = [image1, image2, image3, image4, image5, image6, image7];

export default function CHR1S() {
  const { categoryLayoutChanged } = useContext(ToggleContext);

  return (
    <div
      className={`artist-page-container ${
        categoryLayoutChanged ? "rearranged" : ""
      }`}
    >
      <h1 className="artist-page-title">CHR1S's Artwork</h1>
      <p className="description">
        CHR1S's artwork dissects and reassembles visual components to produce
        arresting, three-dimensional compositions, drawing inspiration from
        early cubists. CHR1S presents a novel viewpoint on reality which
        promotes reflection through disjointed patterns and abstract shapes.
      </p>
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
