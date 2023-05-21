import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/category.css";

export default function Category() {
  const location = useLocation();

  return (
    <nav className="category">
      <Link
        className={`link ${location.pathname === "/vision" ? "visited" : ""}`}
        to="/vision"
      >
        ⭐Vision
      </Link>
      <Link
        className={`link ${location.pathname === "/about" ? "visited" : ""}`}
        to="/about"
      >
        ⭐About
      </Link>
      <Link
        className={`link ${location.pathname === "/artist" ? "visited" : ""}`}
        to="/artist"
      >
        ⭐Artist
      </Link>
      <Link
        className={`link ${
          location.pathname === "/marketplace" ? "visited" : ""
        }`}
        to="/marketplace"
      >
        ⭐Marketplace
      </Link>
      <Link
        className={`link ${location.pathname === "/faq" ? "visited" : ""}`}
        to="/faq"
      >
        ⭐FAQ
      </Link>
    </nav>
  );
}
