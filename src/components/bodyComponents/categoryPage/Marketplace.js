import React, { useContext, useState, useEffect } from "react";
import { ToggleContext } from "../../../ToggleContext";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import "../../../styles/marketplace.css";

import goodsImg from "../../../images/goods-img.jpg";
import homedecorImg from "../../../images/homedecor-img.jpg";
import web3Img from "../../../images/web3-img.jpg";

const imageFiles = [homedecorImg, goodsImg, web3Img];

export default function Marketplace() {
  const { deleteCategoryLayout, categoryLayoutChanged } =
    useContext(ToggleContext);

  const handleClick = (event) => {
    deleteCategoryLayout(event);
  };

  const [imagesLoaded, setImagesLoaded] = useState(false);
  useEffect(() => {
    const imagePromises = imageFiles.map((file) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.src = file;
      });
    });
    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  return (
    <div
      className={`marketplace ${categoryLayoutChanged ? "rearranged" : ""}`}
      onClick={handleClick}
    >
      {imagesLoaded ? (
        <>
          <div className="marketplace-category">
            <Link
              to="/d3sign-dao-studio/marketplace/homedecor"
              className="marketplace-category-button homedecor-container"
            >
              <img
                className="homedecor-img"
                src={imageFiles[0]}
                alt="homedecor-img"
              />
              <div className="marketplace-category-button-text homedecor-text">
                Home decor
              </div>
            </Link>

            <Link
              to="/d3sign-dao-studio/marketplace/goods"
              className="marketplace-category-button goods-container"
            >
              <img className="goods-img" src={imageFiles[1]} alt="goods-img" />
              <div className="marketplace-category-button-text goods-text">
                Goods
              </div>
            </Link>

            <Link
              to="/d3sign-dao-studio/marketplace/web3"
              className="marketplace-category-button web3-container"
            >
              <img className="web3-img" src={imageFiles[2]} alt="web3-img" />
              <div className="marketplace-category-button-text web3-text">
                Web 3.0
              </div>
            </Link>
          </div>
        </>
      ) : (
        <div className="loading">
          <ClipLoader color={"white"} size={50} />
        </div>
      )}
    </div>
  );
}
