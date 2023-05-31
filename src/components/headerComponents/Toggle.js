import React, { useEffect, useState } from "react";
import "boxicons";
import "boxicons/css/boxicons.min.css";
import "../../styles/toggle.css";

export default function Toggle({ handleToggle }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    handleToggle(isActive);
  }, [isActive]);

  const handleClick = () => {
    setIsActive(true);
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
