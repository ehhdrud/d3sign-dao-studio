import React, { useContext, useState } from "react";
import { ToggleContext } from "../../../ToggleContext";
import { Link } from "react-router-dom";
import goodsImg from "../../../images/goods-img.jpg";
import homedecorImg from "../../../images/homedecor-img.jpg";
import web3Img from "../../../images/web3-img.jpg";
import "../../../styles/marketplace.css";

export default function Marketplace() {
  const { categoryLayoutChanged } = useContext(ToggleContext);

  const [hoveredState, setHoveredState] = useState({
    goods: false,
    homedecor: false,
    web3: false,
  });

  const handleMouseEnter = (key) => {
    setHoveredState((prevState) => ({
      ...prevState,
      [key]: true,
    }));
  };

  const handleMouseLeave = (key) => {
    setHoveredState((prevState) => ({
      ...prevState,
      [key]: false,
    }));
  };

  return (
    <div className={`marketplace ${categoryLayoutChanged ? "rearranged" : ""}`}>
      <h1>Marketplace</h1>
      <div className="marketplace-category">
        <Link
          to="/marketplace/homedecor"
          className={`marketplace-category-button homedecor-container ${
            hoveredState.homedecor ? "hovered" : ""
          }`}
          onMouseEnter={() => handleMouseEnter("homedecor")}
          onMouseLeave={() => handleMouseLeave("homedecor")}
        >
          <img
            className="homedecor-img"
            src={homedecorImg}
            alt="homedecor-img"
          />
          <div className="marketplace-category-button-text homedecor-text">
            Home
            <br />
            decor
          </div>
        </Link>

        <Link
          to="/marketplace/goods"
          className={`marketplace-category-button goods-container ${
            hoveredState.goods ? "hovered" : ""
          }`}
          onMouseEnter={() => handleMouseEnter("goods")}
          onMouseLeave={() => handleMouseLeave("goods")}
        >
          <img className="goods-img" src={goodsImg} alt="goods-img" />
          <div className="marketplace-category-button-text goods-text">
            Goods
          </div>
        </Link>

        <Link
          to="/marketplace/web3"
          className={`marketplace-category-button web3-container ${
            hoveredState.web3 ? "hovered" : ""
          }`}
          onMouseEnter={() => handleMouseEnter("web3")}
          onMouseLeave={() => handleMouseLeave("web3")}
        >
          <img className="web3-img" src={web3Img} alt="web3-img" />
          <div className="marketplace-category-button-text web3-text">Web3</div>
        </Link>
      </div>
    </div>
  );
}
