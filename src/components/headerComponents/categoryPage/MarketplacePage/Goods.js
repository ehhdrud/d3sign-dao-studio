import React, { useContext } from "react";
import { ToggleContext } from "../../../../ToggleContext";
import "../../../../styles/goods.css";

export default function Goods() {
  const { categoryLayoutChanged } = useContext(ToggleContext);

  return (
    <div className={`goods ${categoryLayoutChanged ? "rearranged" : ""}`}>
      <h1>Goods marketplace</h1>
      <div className="goods-by-R1N">
        <h2># R1N's goods</h2>
        <a
          className="marketplace-link"
          href="https://www.redbubble.com/people/MechaSociety/explore?asc=u&page=1&sortOrder=recent"
          target="_blank"
          rel="noreferrer noopener"
        >
          Redbbuble
        </a>
        <a
          className="marketplace-link"
          href="https://marpple.shop/artist_r1n?page=0"
          target="_blank"
          rel="noreferrer noopener"
        >
          MappleShop
        </a>
      </div>
      <div className="T0RI">
        <h2># T0R1's goods</h2>
        <a
          className="marketplace-link"
          href="https://oround.com/torianimeartist"
          target="_blank"
          rel="noreferrer noopener"
        >
          Oround
        </a>
      </div>
    </div>
  );
}
