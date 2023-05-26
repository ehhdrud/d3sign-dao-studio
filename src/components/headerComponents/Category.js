import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/category.css";

export default function Category() {
  const location = useLocation();

  return (
    <nav className="category">
      <Link
        className={`link ${
          location.pathname.startsWith("/vision") ? "visited" : ""
        }`}
        to="/vision"
      >
        Vision
      </Link>
      <Link
        className={`link ${
          location.pathname.startsWith("/about") ? "visited" : ""
        }`}
        to="/about"
      >
        About
      </Link>
      <Link
        className={`link ${
          location.pathname.startsWith("/artists") ? "visited" : ""
        }`}
        to="/artists"
      >
        Arts and artists
      </Link>
      <Link
        className={`link ${
          location.pathname.startsWith("/marketplace") ? "visited" : ""
        }`}
        to="/marketplace"
      >
        Marketplace
      </Link>
      <Link
        className={`link ${
          location.pathname.startsWith("/faq") ? "visited" : ""
        }`}
        to="/faq"
      >
        FAQ
      </Link>
    </nav>
  );
}
