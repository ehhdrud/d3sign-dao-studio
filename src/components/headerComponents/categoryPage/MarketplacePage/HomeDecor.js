import React, { useContext } from "react";
import { ToggleContext } from "../../../../ToggleContext";
import "../../../../styles/homedecor.css";

export default function HomeDecor() {
  const { categoryLayoutChanged } = useContext(ToggleContext);

  return (
    <div className={`homedecor ${categoryLayoutChanged ? "rearranged" : ""}`}>
      <h1>Home decor marketplace</h1>
    </div>
  );
}
