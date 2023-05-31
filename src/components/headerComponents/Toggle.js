import React, { useEffect, useState } from "react";
import "boxicons";
import "boxicons/css/boxicons.min.css";
import "../../styles/toggle.css";

export default function Toggle({ onToggle }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    onToggle(isActive);
  }, [isActive, onToggle]);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="toggle-container">
      <i
        className={`toggle bx bx-category ${isActive ? "active" : ""}`}
        onClick={handleClick}
      ></i>
    </div>
  );
}

<i class=""></i>;
