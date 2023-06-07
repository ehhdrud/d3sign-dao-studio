import React, { useContext } from "react";
import { ToggleContext } from "../../../../ToggleContext";
import "../../../../styles/goods.css";

export default function Goods() {
  const { categoryLayoutChanged } = useContext(ToggleContext);

  return (
    <div className={`goods ${categoryLayoutChanged ? "rearranged" : ""}`}>
      <h1>Goods</h1>

      <details>
        <summary>
          <span className="genre">Cyberpunk Art</span>
          <span className="by">by</span>
          <span className="artist">R1N</span>
        </summary>
        <div>
          <a
            className="marketplace-link"
            href="https://www.redbubble.com/people/MechaSociety/explore?asc=u&page=1&sortOrder=recent"
            target="_blank"
            rel="noreferrer noopener"
          >
            Redbbuble
          </a>
        </div>
        <div>
          <a
            className="marketplace-link"
            href="https://marpple.shop/artist_r1n?page=0"
            target="_blank"
            rel="noreferrer noopener"
          >
            MappleShop
          </a>
        </div>
      </details>

      <details>
        <summary>
          <span className="genre">Anime Art</span>
          <span className="by">by</span>
          <span className="artist">T0R1</span>
        </summary>
        <div>
          <a
            className="marketplace-link"
            href="https://oround.com/torianimeartist"
            target="_blank"
            rel="noreferrer noopener"
          >
            Oround
          </a>
        </div>
      </details>
    </div>
  );
}
