import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/category.css";

export default function Category({ isToggled }) {
  const location = useLocation();
  const [layoutSignal, setLayoutSignal] = useState("");

  useEffect(() => {
    if (isToggled) {
      setLayoutSignal("rearrange");
    } else {
      setLayoutSignal("");
    }
  }, [isToggled]);

  useEffect(() => {
    const handleClick = () => {
      setLayoutSignal("");
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <nav className={`category ${layoutSignal}`}>
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
