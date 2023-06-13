import React, { useContext } from "react";
import { ToggleContext } from "../../../../ToggleContext";
import "../../../../styles/marketplacePage.css";

export default function HomeDecor() {
  const { deleteCategoryLayout, categoryLayoutChanged } =
    useContext(ToggleContext);

  const handleClick = (event) => {
    deleteCategoryLayout(event);
  };

  return (
    <div
      className={`marketplace-page ${
        categoryLayoutChanged ? "rearranged" : ""
      }`}
      onClick={handleClick}
    >
      <h1>Home decor</h1>
      <p className="comingSoon">COMING SOON</p>
    </div>
  );
}
