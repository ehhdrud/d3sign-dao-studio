import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Category.css";

export default function Category() {
  return (
    <nav className="category">
      <Link className="link" to="/vision">
        ⭐Vision
      </Link>
      <Link className="link" to="/about">
        ⭐About
      </Link>
      <Link className="link" to="/artist">
        ⭐Artist
      </Link>
      <Link className="link" to="/marketplace">
        ⭐Marketplace
      </Link>
      <Link className="link" to="/faq">
        ⭐FAQ
      </Link>
    </nav>
  );
}
