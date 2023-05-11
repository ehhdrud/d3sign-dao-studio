import React from "react";
import logo from "../../images/d3-logo.jpg";
import "../../styles/Logo.css";

export default function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
}
