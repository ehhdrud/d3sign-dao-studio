import React from "react";
import Gallery from "./bodyComponents/Gallery";
import Intro from "./bodyComponents/Intro";
import "../styles/body.css";
import "../styles/intro.css";

export default function Body() {
  return (
    <div className="body">
      <Gallery />
      <Intro />
    </div>
  );
}
