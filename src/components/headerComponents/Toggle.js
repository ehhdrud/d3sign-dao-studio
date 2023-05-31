import React, { useContext } from "react";
import { ToggleContext } from "../../ToggleContext.js";
import "boxicons";
import "boxicons/css/boxicons.min.css";
import "../../styles/toggle.css";

export default function Toggle() {
  const { toggleCategoryLayout } = useContext(ToggleContext);

  const handleClick = () => {
    toggleCategoryLayout();
  };

  return (
    <div className="toggle-container" onClick={handleClick}>
      <i className="toggle bx bx-category"></i>
    </div>
  );
}
