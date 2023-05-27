import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/category.css";
import "boxicons";

export default function Category() {
  const location = useLocation();

  return (
    <nav className="category">
      <div className="category-item">
        {/* <box-icon name="globe" color="#ffffff"></box-icon> */}
        <box-icon name="rocket" color="#ffffff"></box-icon>
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
        <box-icon name="palette" type="solid" color="#ffffff"></box-icon>
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
        <box-icon name="store" color="ffffff"></box-icon>
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
        <box-icon name="conversation" color="#ffffff"></box-icon>
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
