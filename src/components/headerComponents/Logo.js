import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/d3-logo.jpg";
import "../../styles/logo.css";

export default function Logo() {
  return (
    <Link className="logo" to="/">
      <img src={logo} alt="logo" />
    </Link>
  );
}
