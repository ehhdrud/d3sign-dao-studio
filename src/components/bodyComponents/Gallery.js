import React from "react";
import { Link } from "react-router-dom";
import "../../styles/gallery.css";

const arts = [
  {
    path: require("../../images/arts/image-V1VI-1.png"),
    artist: "V1VI",
    genre: "Collage Art",
  },
  {
    path: require("../../images/arts/image-P0LA-1.png"),
    artist: "P0LA",
    genre: "Pop Art",
  },
  {
    path: require("../../images/arts/image-R0RO-1.png"),
    artist: "R0RO",
    genre: "Pattern Fabric Art",
  },
  {
    path: require("../../images/arts/image-T0RI-1.png"),
    artist: "T0RI",
    genre: "Anime Art",
  },
  {
    path: require("../../images/arts/image-CHR1S-1.png"),
    artist: "CHR1S",
    genre: "Cubism",
  },
  {
    path: require("../../images/arts/image-ZER1-1.png"),
    artist: "ZER1",
    genre: "Pixel Art",
  },
  {
    path: require("../../images/arts/image-J1N-1.png"),
    artist: "J1N",
    genre: "Abstractism",
  },
  {
    path: require("../../images/arts/image-MIRR0R-1.png"),
    artist: "MIRR0R",
    genre: "Watercolor",
  },
  {
    path: require("../../images/arts/image-Paul0-1.png"),
    artist: "Paul0",
    genre: "Expressionism",
  },
  {
    path: require("../../images/arts/image-R1N-1.png"),
    artist: "R1N",
    genre: "Future Oriented",
  },
];

export default function Gallery() {
  return (
    <div className="gallery-container">
      {arts.map((art, index) => (
        <Link className="link" key={index} to={`/artist/${art.artist}`}>
          <div className="art-card">
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
