import React, { useContext } from "react";
import { ToggleContext } from "../../../../ToggleContext";
import "./styles/marketplacePage.css";

import T0RI from "../../../../images/arts/T0RI/T0RI-00.png";
import R1N from "../../../../images/arts/R1N/R1N-00.png";

// import V1VI from "../../../../images/arts/V1VI/V1VI-00.png";
// import P0LA from "../../../../images/arts/P0LA/P0LA-00.png";
// import R0RO from "../../../../images/arts/R0RO/R0RO-00.png";
// import T0RI from "../../../../images/arts/T0RI/T0RI-00.png";
// import CHR1S from "../../../../images/arts/CHR1S/CHR1S-00.png";
// import ZER1 from "../../../../images/arts/ZER1/ZER1-00.png";
// import J1N from "../../../../images/arts/J1N/J1N-00.png";
// import MIRR0R from "../../../../images/arts/MIRR0R/MIRR0R-00.png";
// import PAUL0 from "../../../../images/arts/PAUL0/PAUL0-00.png";
// import R1N from "../../../../images/arts/R1N/R1N-00.png";

export default function Goods() {
  const { categoryLayoutChanged } = useContext(ToggleContext);

  return (
    <div
      className={`marketplace-page ${
        categoryLayoutChanged ? "rearranged" : ""
      }`}
    >
      <h1>Goods</h1>

      <div className="marketplace-title">
        <span className="artist">T0RI</span>
        <span className="genre">Anime Art</span>
      </div>
      <div className="marketplace-items">
        <div className="marketplace-item">
          <a
            className="marketplace-link"
            href="https://oround.com/torianimeartist"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="marketplace-img"
              src={T0RI}
              alt="Anime Art by T0RI"
            />
            <p className="marketplace-name">Oround</p>
          </a>
        </div>
      </div>

      <div className="marketplace-title">
        <span className="artist">R1N</span>
        <span className="genre">Cyberpunk Art</span>
      </div>
      <div className="marketplace-items">
        <div className="marketplace-item">
          <a
            className="marketplace-link"
            href="https://www.redbubble.com/people/MechaSociety/explore?asc=u&page=1&sortOrder=recent"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="marketplace-img"
              src={R1N}
              alt="Cyberfunk Art by R1N"
            />
            <p className="marketplace-name">Redbubble</p>
          </a>
        </div>

        <div className="marketplace-item">
          <a
            className="marketplace-link"
            href="https://marpple.shop/artist_r1n?page=0"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="marketplace-img"
              src={R1N}
              alt="Cyberfunk Art by R1N"
            />
            <p className="marketplace-name">Marpple Shop</p>
          </a>
        </div>
      </div>
    </div>
  );
}
