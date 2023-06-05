import React from "react";
import "../../../../styles/goods.css";

export default function Goods() {
  return (
    <div className="goods">
      <a
        className="marketplace-link"
        href="https://www.redbubble.com/people/MechaSociety/explore?asc=u&page=1&sortOrder=recent"
        target="_blank"
        rel="noreferrer noopener"
      >
        R1N - Goods - Redbbuble
      </a>

      <a
        className="marketplace-link"
        href="https://marpple.shop/artist_r1n?page=0"
        target="_blank"
        rel="noreferrer noopener"
      >
        R1N - Goods - MappleShop
      </a>

      <a
        className="marketplace-link"
        href="https://oround.com/torianimeartist"
        target="_blank"
        rel="noreferrer noopener"
      >
        T0R1 - Goods - Oround
      </a>
    </div>
  );
}
