import React, { useState, useEffect, useContext } from "react";
import { ToggleContext } from "../../ToggleContext";
import { Link } from "react-router-dom";
import { useHoveredIndex } from "../../HoveredIndexContext.js";
import { ClipLoader } from "react-spinners";
import "../../styles/default.css";

import V1VI from "../../images/arts/V1VI/V1VI-00.png";
import P0LA from "../../images/arts/P0LA/P0LA-00.png";
import R0RO from "../../images/arts/R0RO/R0RO-00.png";
import T0RI from "../../images/arts/T0RI/T0RI-00.png";
import CHR1S from "../../images/arts/CHR1S/CHR1S-00.png";
import ZER1 from "../../images/arts/ZER1/ZER1-00.png";
import J1N from "../../images/arts/J1N/J1N-00.png";
import MIRR0R from "../../images/arts/MIRR0R/MIRR0R-00.png";
import PAUL0 from "../../images/arts/PAUL0/PAUL0-00.png";
import R1N from "../../images/arts/R1N/R1N-00.png";

const imageFiles = [
  V1VI,
  P0LA,
  R0RO,
  T0RI,
  CHR1S,
  ZER1,
  J1N,
  MIRR0R,
  PAUL0,
  R1N,
];

const arts = [
  {
    path: imageFiles[0],
    artist: "V1VI",
    genre: "Collage Art",
  },
  {
    path: imageFiles[1],
    artist: "P0LA",
    genre: "Pop Art",
  },
  {
    path: imageFiles[2],
    artist: "R0RO",
    genre: "Pattern Fabric Art",
  },
  {
    path: imageFiles[3],
    artist: "T0RI",
    genre: "Anime Art",
  },
  {
    path: imageFiles[4],
    artist: "CHR1S",
    genre: "Cubism",
  },
  {
    path: imageFiles[5],
    artist: "ZER1",
    genre: "Pixel Art",
  },
  {
    path: imageFiles[6],
    artist: "J1N",
    genre: "Abstractism",
  },
  {
    path: imageFiles[7],
    artist: "MIRR0R",
    genre: "Watercolor",
  },
  {
    path: imageFiles[8],
    artist: "PAUL0",
    genre: "Expressionism",
  },
  {
    path: imageFiles[9],
    artist: "R1N",
    genre: "Cyberpunk Art",
  },
];

export default function Default() {
  const { hoveredIndex, setHoveredIndex } = useHoveredIndex();

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const { categoryLayoutChanged, deleteCategoryLayout } =
    useContext(ToggleContext);

  const defaultClassName = `default ${hoveredIndex !== null ? "hovered" : ""} ${
    categoryLayoutChanged ? "rearranged" : ""
  }`;

  const handleClick = (event) => {
    deleteCategoryLayout(event);
  };

  const [imagesLoaded, setImagesLoaded] = useState(false);
  useEffect(() => {
    const imagePromises = imageFiles.map((file) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.src = file;
      });
    });
    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  return (
    <div className={defaultClassName} onClick={handleClick}>
      {imagesLoaded ? (
        <>
          <div className="intro">
            <span className="intro-item-1">A Community of</span>
            <span className="intro-item-2">&nbsp;10 Passinate</span>
            <span className="intro-item-3">
              &nbsp;Graghic Design Aritists .
            </span>
          </div>
          <div className="gallery-container">
            {arts.map((art, index) => (
              <Link
                className="link"
                key={index}
                to={`/d3sign-dao-studio/artsandartists/${art.artist}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`art-card ${
                    hoveredIndex === index ? "hovered" : ""
                  }`}
                >
                  <div className="art-img-container">
                    <img
                      className="art-img"
                      src={art.path}
                      alt={`${art.artist}'s artwork`}
                    />
                    <div className="genre-on-img">{art.genre}</div>
                    <div className="artist-on-img">{art.artist}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div className="loading">
          <ClipLoader color={"white"} size={50} />
        </div>
      )}
    </div>
  );
}
