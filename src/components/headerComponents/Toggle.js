import React, { useContext } from "react";
import { ToggleContext } from "../../store/ToggleContext.js";
import "boxicons/css/boxicons.min.css";
import "./styles/toggle.css";

export default function Toggle() {
  const { toggleCategoryLayout } = useContext(ToggleContext);

  const handleClick = () => {
    toggleCategoryLayout();
  };

  return (
    <div className="toggle toggle-container" onClick={handleClick}>
      <i className="toggle toggle-icon bx bx-menu"></i>
    </div>
  );
}
