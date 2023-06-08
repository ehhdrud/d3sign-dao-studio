import React, { useContext } from "react";
import { ToggleContext } from "../../../../ToggleContext";
import "../../../../styles/goods.css";

export default function Goods() {
  const { deleteCategoryLayout, categoryLayoutChanged } =
    useContext(ToggleContext);

  const handleClick = (event) => {
    deleteCategoryLayout(event);
  };

  return (
    <div
      className={`goods ${categoryLayoutChanged ? "rearranged" : ""}`}
      onClick={handleClick}
    >
      <h1>Goods</h1>

      <div className="list">
        <div className="list-title">
          <span className="genre">Cyberpunk Art</span>
          <span className="by">by</span>
          <span className="artist">R1N</span>
        </div>
        <ul>
          <li className="marketplace-li">
            <i class="bx bx-link-external"></i>
            <a
              className="marketplace-link"
              href="https://www.redbubble.com/people/MechaSociety/explore?asc=u&page=1&sortOrder=recent"
              target="_blank"
              rel="noreferrer noopener"
            >
              redbubble.com/MechaSociety
            </a>
          </li>
          <li className="marketplace-li">
            <i class="bx bx-link-external"></i>
            <a
              className="marketplace-link"
              href="https://marpple.shop/artist_r1n?page=0"
              target="_blank"
              rel="noreferrer noopener"
            >
              marpple.shop/artist_r1n
            </a>
          </li>
        </ul>
      </div>

      <div className="list">
        <div className="list-title">
          <span className="genre">Anime Art</span>
          <span className="by">by</span>
          <span className="artist">T0RI</span>
        </div>
        <ul>
          <li className="marketplace-li">
            <i class="bx bx-link-external"></i>
            <a
              className="marketplace-link"
              href="https://oround.com/torianimeartist"
              target="_blank"
              rel="noreferrer noopener"
            >
              oround.com/torianimeartist
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
