import React from "react";
import Gallery from "./bodyComponents/Gallery";
import Intro from "./bodyComponents/Intro";
import "../styles/body.css";
import { useHoveredIndex } from "../HoveredIndexContext.js";

export default function Body() {
  const { hoveredIndex } = useHoveredIndex();

  const bodyClassName = `body ${hoveredIndex !== null ? "hovered" : ""}`;

  return (
    <div className={bodyClassName}>
      <Intro />
      <Gallery />
    </div>
  );
}
