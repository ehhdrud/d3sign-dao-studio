import React, { useContext } from "react";
import { ToggleContext } from "../../ToggleContext";
import Gallery from "./mainPage/Gallery";
import Intro from "./mainPage/Intro";
import "../../styles/main.css";
import { useHoveredIndex } from "../../HoveredIndexContext.js";

export default function Main() {
  const { hoveredIndex } = useHoveredIndex();

  const { categoryLayoutChanged, deleteCategoryLayout } =
    useContext(ToggleContext);

  const mainClassName = `main ${hoveredIndex !== null ? "hovered" : ""} ${
    categoryLayoutChanged ? "rearranged" : ""
  }`;

  const handleClick = (event) => {
    deleteCategoryLayout(event);
  };

  return (
    <div className={mainClassName} onClick={handleClick}>
      <Intro />
      <Gallery />
    </div>
  );
}
