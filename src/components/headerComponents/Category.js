import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ToggleContext } from "../../ToggleContext.js";
import "../../styles/category.css";

export default function Category() {
  const location = useLocation();
  const { categoryLayoutChanged } = useContext(ToggleContext);

  return (
    <nav className={`category ${categoryLayoutChanged ? "rearranged" : ""}`}>
      <div className="category-item">
        <Link
          className={`link ${
            location.pathname.startsWith("/whatson") ? "visited" : ""
          }`}
          to="/whatson"
        >
          What's on
        </Link>
      </div>
      <div className="category-item">
        <Link
          className={`link ${
            location.pathname.startsWith("/artsandartists") ? "visited" : ""
          }`}
          to="/artsandartists"
        >
          Arts and artists
        </Link>
      </div>
      <div className="category-item">
        <Link
          className={`link ${
            location.pathname.startsWith("/marketplace") ? "visited" : ""
          }`}
          to="/marketplace"
        >
          Marketplace
        </Link>
      </div>
      <div className="category-item">
        <Link
          className={`link ${
            location.pathname.startsWith("/faq") ? "visited" : ""
          }`}
          to="/faq"
        >
          FAQ
        </Link>
      </div>
    </nav>
  );
}
