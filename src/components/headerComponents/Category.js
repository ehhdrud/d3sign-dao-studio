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
          to="/d3sign-dao-studio/whatson"
        >
          <span className="category-text">What's on</span>
        </Link>
      </div>
      <div className="category-item">
        <Link
          className={`link ${
            location.pathname.startsWith("/artsandartists") ? "visited" : ""
          }`}
          to="/d3sign-dao-studio/artsandartists"
        >
          <span className="category-text">Arts and artists</span>
        </Link>
      </div>
      <div className="category-item">
        <Link
          className={`link ${
            location.pathname.startsWith("/marketplace") ? "visited" : ""
          }`}
          to="/d3sign-dao-studio/marketplace"
        >
          <span className="category-text">Marketplace</span>
        </Link>
      </div>
      <div className="category-item">
        <Link
          className={`link ${
            location.pathname.startsWith("/faq") ? "visited" : ""
          }`}
          to="/d3sign-dao-studio/faq"
        >
          <span className="category-text">FAQ</span>
        </Link>
      </div>
    </nav>
  );
}
