import React, { useContext } from "react";
import { ToggleContext } from "../../../../ToggleContext";
import Carousel from "./artsAndArtistPageElements/Carousel";
import image1 from "../../../../images/arts/R0RO/R0RO-00.png";
import image2 from "../../../../images/arts/R0RO/R0RO-01.png";
import image3 from "../../../../images/arts/R0RO/R0RO-02.png";
import image4 from "../../../../images/arts/R0RO/R0RO-03.png";
import image5 from "../../../../images/arts/R0RO/R0RO-04.png";
import "./styles/artsAndArtistsPage.css";

const imagePaths = [image1, image2, image3, image4, image5];

export default function R0RO() {
  const { categoryLayoutChanged } = useContext(ToggleContext);

  return (
    <div
      className={`artist-page-container ${
        categoryLayoutChanged ? "rearranged" : ""
      }`}
    >
      <h1 className="artist-page-title">R0RO 's Artwork</h1>
      <p className="description">
        The intricate detail and fine craftsmanship are celebrated in R0RO's
        pattern fabric artwork. R0RO develops captivating textile-based
        compositions that are both aesthetically appealing and rich in cultural
        meaning by deftly weaving together various materials.
      </p>
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
