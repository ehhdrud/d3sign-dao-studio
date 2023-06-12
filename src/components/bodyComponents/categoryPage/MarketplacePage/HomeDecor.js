import React, { useContext } from "react";
import { ToggleContext } from "../../../../ToggleContext";
import "../../../../styles/homedecor.css";

export default function HomeDecor() {
  const { deleteCategoryLayout, categoryLayoutChanged } =
    useContext(ToggleContext);

  const handleClick = (event) => {
    deleteCategoryLayout(event);
  };

  return (
    <div
      className={`homedecor ${categoryLayoutChanged ? "rearranged" : ""}`}
      onClick={handleClick}
    >
      <h1>Home decor</h1>
    </div>
  );
}
