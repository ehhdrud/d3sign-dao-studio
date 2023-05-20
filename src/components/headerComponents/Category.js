// import React from "react";
// import { Link } from "react-router-dom";
// import "../../styles/category.css";

// export default function Category() {
//   return (
//     <nav className="category">
//       <Link className="link" to="/vision">
//         ⭐Vision
//       </Link>
//       <Link className="link" to="/about">
//         ⭐About
//       </Link>
//       <Link className="link" to="/artist">
//         ⭐Artist
//       </Link>
//       <Link className="link" to="/marketplace">
//         ⭐Marketplace
//       </Link>
//       <Link className="link" to="/faq">
//         ⭐FAQ
//       </Link>
//     </nav>
//   );
// }

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/category.css";

export default function Category() {
  const location = useLocation();
  const [visitedLinks, setVisitedLinks] = useState([]);

  useEffect(() => {
    const visitedLink = localStorage.getItem("visitedLink");
    if (visitedLink) {
      setVisitedLinks(JSON.parse(visitedLink));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("visitedLink", JSON.stringify(visitedLinks));
  }, [visitedLinks]);

  const handleLinkClick = (link) => {
    if (!visitedLinks.includes(link)) {
      setVisitedLinks([...visitedLinks, link]);
    }
  };

  useEffect(() => {
    const updatedVisitedLinks = visitedLinks.filter((link) =>
      location.pathname.startsWith(link)
    );
    setVisitedLinks(updatedVisitedLinks);
  }, [location.pathname]);

  return (
    <nav className="category">
      <Link
        className={`link ${visitedLinks.includes("/vision") ? "visited" : ""}`}
        to="/vision"
        onClick={() => handleLinkClick("/vision")}
      >
        ⭐Vision
      </Link>
      <Link
        className={`link ${visitedLinks.includes("/about") ? "visited" : ""}`}
        to="/about"
        onClick={() => handleLinkClick("/about")}
      >
        ⭐About
      </Link>
      <Link
        className={`link ${visitedLinks.includes("/artist") ? "visited" : ""}`}
        to="/artist"
        onClick={() => handleLinkClick("/artist")}
      >
        ⭐Artist
      </Link>
      <Link
        className={`link ${
          visitedLinks.includes("/marketplace") ? "visited" : ""
        }`}
        to="/marketplace"
        onClick={() => handleLinkClick("/marketplace")}
      >
        ⭐Marketplace
      </Link>
      <Link
        className={`link ${visitedLinks.includes("/faq") ? "visited" : ""}`}
        to="/faq"
        onClick={() => handleLinkClick("/faq")}
      >
        ⭐FAQ
      </Link>
    </nav>
  );
}
