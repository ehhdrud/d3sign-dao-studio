import React, { useState } from "react";
import Toggle from "./headerComponents/Toggle";
import Logo from "./headerComponents/Logo";
import Category from "./headerComponents/Category";
import Sns from "./headerComponents/Sns";
import "../styles/header.css";

export default function Header() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = (isActive) => {
    setIsToggled(isActive);
  };

  return (
    <nav className="header">
      <Toggle handleToggle={handleToggle} />
      <Logo />
      <Category isToggled={isToggled} />
      <Sns />
    </nav>
  );
}
