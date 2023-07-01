import React, { useContext } from "react";
import { ToggleContext } from "../../../../store/ToggleContext";
import Carousel from "./artsAndArtistPageElements/Carousel";
import image1 from "../../../../images/arts/V1VI/V1VI-00.png";
import image2 from "../../../../images/arts/V1VI/V1VI-01.png";
import image3 from "../../../../images/arts/V1VI/V1VI-02.png";
import image4 from "../../../../images/arts/V1VI/V1VI-03.png";
import image5 from "../../../../images/arts/V1VI/V1VI-04.png";
import image6 from "../../../../images/arts/V1VI/V1VI-05.png";
import "./styles/artsAndArtistsPage.css";

const imagePaths = [image1, image2, image3, image4, image5, image6];

export default function V1VI() {
  const { categoryLayoutChanged } = useContext(ToggleContext);

  return (
    <div
      className={`artist-page-container ${
        categoryLayoutChanged ? "rearranged" : ""
      }`}
    >
      <h1 className="artist-page-title">V1VI</h1>
      <p className="description">
        The collage art of V1VI transports visitors to a realm of fantastical
        beauty with its visual symphony of forms, hues, and textures. V1VI
        painstakingly fuses antique and modern elements to produce
        thought-provoking works that push the limits of conventional art genres.
      </p>
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
