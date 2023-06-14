import React, { useContext } from "react";
import { ToggleContext } from "../../../../ToggleContext";
import "../../../../styles/marketplacePage.css";

export default function HomeDecor() {
  const { categoryLayoutChanged } = useContext(ToggleContext);

  return (
    <div
      className={`marketplace-page ${
        categoryLayoutChanged ? "rearranged" : ""
      }`}
    >
      <h1>Home decor</h1>
      <p className="comingSoon">COMING SOON</p>
    </div>
  );
}
