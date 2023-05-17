import React from "react";
import Gallery from "./bodyComponents/Gallery";
import Intro from "./bodyComponents/Intro";
import "../styles/body.css";

export default function Body() {
  return (
    <div className="body">
      <Intro />
      <Gallery />
    </div>
  );
}
