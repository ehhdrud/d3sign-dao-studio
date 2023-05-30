import React from "react";
import Category from "./Category";
import "boxicons";
import "../../styles/toggle.css";

export default function Toggle() {
  const toggle = document.querySelector("box-icon");
  const category = document.querySelector(".category");

  toggle.addEventListener("click", function () {
    category.classList.toggle("active");
    if (category.classList.contains("active") === true) {
      localStorage.setItem("mobile-category-active", "true");
    } else {
      localStorage.setItem("mobile-category-active", "false");
    }
  });

  if (localStorage.getItem("mobile-category-active") === "true") {
    category.classList.add("active");
  } else {
  }

  return (
    <div className="toggle">
      <box-icon name="right-arrow-circle" color="white"></box-icon>
    </div>
  );
}
