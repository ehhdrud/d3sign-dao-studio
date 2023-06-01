import React, { useContext } from "react";
import { ToggleContext } from "../ToggleContext";
import Gallery from "./bodyComponents/Gallery";
import Intro from "./bodyComponents/Intro";
import "../styles/body.css";
import { useHoveredIndex } from "../HoveredIndexContext.js";

export default function Body() {
  const { hoveredIndex } = useHoveredIndex();

  const bodyClassName = `body ${hoveredIndex !== null ? "hovered" : ""}`;

  const { deleteCategoryLayout } = useContext(ToggleContext);

  const handleClick = (event) => {
    deleteCategoryLayout(event);
  };

  return (
    <div className={bodyClassName} onClick={handleClick}>
      <Intro />
      <Gallery />
    </div>
  );
}
