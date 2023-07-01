import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ToggleContext } from "../../store/ToggleContext.js";
import "./styles/category.css";

export default function Category() {
  const location = useLocation();
  const { deleteCategoryLayout, categoryLayoutChanged } =
    useContext(ToggleContext);

  const handleClick = (event) => {
    deleteCategoryLayout(event);
  };

  return (
    <nav className={`category ${categoryLayoutChanged ? "rearranged" : ""}`}>
      <div className="category-items">
        <div className="category-item">
          <Link
            className={`link ${
              location.pathname.startsWith("/d3sign-dao-studio/whatson")
                ? "visited"
                : ""
            }`}
            to="/d3sign-dao-studio/whatson"
            onClick={handleClick}
          >
            <span className="category-text">What's on</span>
          </Link>
        </div>
        <div className="category-item">
          <Link
            className={`link ${
              location.pathname.startsWith("/d3sign-dao-studio/artsandartists")
                ? "visited"
                : ""
            }`}
            to="/d3sign-dao-studio/artsandartists"
            onClick={handleClick}
          >
            <span className="category-text">Arts and artists</span>
          </Link>
        </div>
        <div className="category-item">
          <Link
            className={`link ${
              location.pathname.startsWith("/d3sign-dao-studio/marketplace")
                ? "visited"
                : ""
            }`}
            to="/d3sign-dao-studio/marketplace"
            onClick={handleClick}
          >
            <span className="category-text">Marketplace</span>
          </Link>
        </div>
        <div className="category-item">
          <Link
            className={`link ${
              location.pathname.startsWith("/d3sign-dao-studio/faq")
                ? "visited"
                : ""
            }`}
            to="/d3sign-dao-studio/faq"
            onClick={handleClick}
          >
            <span className="category-text">FAQ</span>
          </Link>
        </div>
      </div>
      <div className="transparent-space" onClick={handleClick}></div>
    </nav>
  );
}
