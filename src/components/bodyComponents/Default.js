import React, { useContext } from "react";
import { ToggleContext } from "../../ToggleContext";
import Gallery from "./defaultPage/Gallery";
import Intro from "./defaultPage/Intro";
import "../../styles/default.css";
import { useHoveredIndex } from "../../HoveredIndexContext.js";

export default function Default() {
  const { hoveredIndex } = useHoveredIndex();

  const { categoryLayoutChanged, deleteCategoryLayout } =
    useContext(ToggleContext);

  const defaultClassName = `default ${hoveredIndex !== null ? "hovered" : ""} ${
    categoryLayoutChanged ? "rearranged" : ""
  }`;

  const handleClick = (event) => {
    deleteCategoryLayout(event);
  };

  return (
    <div className={defaultClassName} onClick={handleClick}>
      <Intro />
      <Gallery />
    </div>
  );
}
