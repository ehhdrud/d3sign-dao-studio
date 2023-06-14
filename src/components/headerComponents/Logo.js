import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import logo from "../../images/logo.jpg";
import "./styles/logo.css";
import { ToggleContext } from "../../ToggleContext";

export default function Logo() {
  const { categoryLayoutChanged } = useContext(ToggleContext);
  return (
    <Link
      className={`logo ${categoryLayoutChanged ? "rearranged" : ""}`}
      to="/d3sign-dao-studio"
    >
      {/* <img src={logo} alt="logo" /> */}
      <span className="logo-text">D3sign DAO Studio</span>
    </Link>
  );
}
