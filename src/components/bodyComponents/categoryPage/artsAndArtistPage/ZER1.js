import React, { useContext } from "react";
import { ToggleContext } from "../../../../store/ToggleContext";
import Carousel from "./artsAndArtistPageElements/Carousel";
import image1 from "../../../../images/arts/ZER1/ZER1-00.png";
import image2 from "../../../../images/arts/ZER1/ZER1-01.png";
import image3 from "../../../../images/arts/ZER1/ZER1-02.png";
import image4 from "../../../../images/arts/ZER1/ZER1-03.png";
import image5 from "../../../../images/arts/ZER1/ZER1-04.png";
import "./styles/artsAndArtistsPage.css";

const imagePaths = [image1, image2, image3, image4, image5];
export default function ZER1() {
  const { categoryLayoutChanged } = useContext(ToggleContext);

  return (
    <div
      className={`artist-page-container ${
        categoryLayoutChanged ? "rearranged" : ""
      }`}
    >
      <h1 className="artist-page-title">ZER1</h1>
      <p className="description">
        Pixel art by ZER1 is a wistful ode to the digital era, exhibiting
        elaborate creations made from the little pixel. ZER1's work is humorous
        and smart, fusing contemporary methods with a nostalgic style, and
        appealing to a broad spectrum of consumers.
      </p>
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
