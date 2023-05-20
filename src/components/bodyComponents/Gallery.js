import React from "react";
import { Link } from "react-router-dom";
import "../../styles/gallery.css";
import { useHoveredIndex } from "../../HoveredIndexContext.js";

const arts = [
  {
    path: require("../../images/arts/V1VI/V1VI-00.png"),
    artist: "V1VI",
    genre: "Collage Art",
  },
  {
    path: require("../../images/arts/P0LA/P0LA-00.png"),
    artist: "P0LA",
    genre: "Pop Art",
  },
  {
    path: require("../../images/arts/R0RO/R0RO-00.png"),
    artist: "R0RO",
    genre: "Pattern Fabric Art",
  },
  // {
  //   path: require("../../images/arts/T0RI-1.png"),
  //   artist: "T0RI",
  //   genre: "Anime Art",
  // },
  // {
  //   path: require("../../images/arts/CHR1S-1.png"),
  //   artist: "CHR1S",
  //   genre: "Cubism",
  // },
  {
    path: require("../../images/arts/ZER1/ZER1-00.png"),
    artist: "ZER1",
    genre: "Pixel Art",
  },
  // {
  //   path: require("../../images/arts/J1N-1.png"),
  //   artist: "J1N",
  //   genre: "Abstractism",
  // },
  // {
  //   path: require("../../images/arts/MIRR0R-1.png"),
  //   artist: "MIRR0R",
  //   genre: "Watercolor",
  // },
  // {
  //   path: require("../../images/arts/Paul0-1.png"),
  //   artist: "Paul0",
  //   genre: "Expressionism",
  // },
  {
    path: require("../../images/arts/R1N/R1N-00.png"),
    artist: "R1N",
    genre: "Cyberpunk",
  },
];

export default function Gallery() {
  const { hoveredIndex, setHoveredIndex } = useHoveredIndex();

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="gallery-container">
      {arts.map((art, index) => (
        <Link
          className="link"
          key={index}
          to={`/artist/${art.artist}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`art-card ${hoveredIndex === index ? "hovered" : ""}`}
          >
            <img
              className="art-img"
              src={art.path}
              alt={`${art.artist}'s artwork`}
            />
            <div className="art-desc">
              <div className="artist">{art.artist}</div>
              <div className="genre">{art.genre}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
