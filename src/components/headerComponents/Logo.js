import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg";
import "../../styles/logo.css";

export default function Logo() {
  return (
    <Link className="logo" to="/">
      {/* <img src={logo} alt="logo" /> */}
      <span className="logo-text">D3sign&nbsp;&nbsp;Dao&nbsp;&nbsp;Studio</span>
    </Link>
  );
}
