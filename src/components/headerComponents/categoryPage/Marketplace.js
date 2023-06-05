// import React, { useContext, useState } from "react";
// import { ToggleContext } from "../../../ToggleContext";
// import "../../../styles/marketplace.css";
// import { Link } from "react-router-dom";

// export default function Marketplace() {
//   const { categoryLayoutChanged } = useContext(ToggleContext);

//   const [hoveredGoodsState, setHoveredGoodsState] = useState(false);
//   const handleGoodsMouseEnter = () => {
//     setHoveredGoodsState(true);
//   };
//   const handleGoodsMouseLeave = () => {
//     setHoveredGoodsState(false);
//   };

//   const [hoveredWeb3State, setHoveredWeb3State] = useState(false);
//   const handleWeb3MouseEnter = () => {
//     setHoveredWeb3State(true);
//   };
//   const handleWeb3MouseLeave = () => {
//     setHoveredWeb3State(false);
//   };

//   return (
//     <div className={`marketplace ${categoryLayoutChanged ? "rearranged" : ""}`}>
//       <h1>Marketplace</h1>
//       <div className="marketplace-category">
//         <Link
//           className={`marketplace-category-button goods-container ${
//             hoveredGoodsState === true ? "hovered" : ""
//           }`}
//           onMouseEnter={handleGoodsMouseEnter}
//           onMouseLeave={handleGoodsMouseLeave}
//         >
//           <div className="marketplace-category-button-text">Goods</div>
//         </Link>
//         <Link
//           className={`marketplace-category-button web3-container ${
//             hoveredWeb3State === true ? "hovered" : ""
//           }`}
//           onMouseEnter={handleWeb3MouseEnter}
//           onMouseLeave={handleWeb3MouseLeave}
//         >
//           <div className="marketplace-category-button-text">Web3</div>
//         </Link>
//       </div>
//       <a
//         className="marketplace-link"
//         href="https://www.redbubble.com/people/MechaSociety/explore?asc=u&page=1&sortOrder=recent"
//         target="_blank"
//         rel="noreferrer noopener"
//       >
//         R1N - Goods - Redbbuble
//       </a>
//       <a
//         className="marketplace-link"
//         href="
//         https://marpple.shop/artist_r1n?page=0"
//         target="_blank"
//         rel="noreferrer noopener"
//       >
//         R1N - Goods - MappleShop
//       </a>
//       <a
//         className="marketplace-link"
//         href="https://mintsquare.io/zksync/ZkMechaSociety"
//         target="_blank"
//         rel="noreferrer noopener"
//       >
//         R1N - Web3 - Mintsquare
//       </a>
//       <a
//         className="marketplace-link"
//         href="https://oround.com/torianimeartist"
//         target="_blank"
//         rel="noreferrer noopener"
//       >
//         T0R1 - Goods - Oround
//       </a>
//     </div>
//   );
// }

import React, { useContext, useState } from "react";
import { ToggleContext } from "../../../ToggleContext";
import "../../../styles/marketplace.css";
import { Link } from "react-router-dom";
import goodsImg from "../../../images/goods-img.jpg";
import web3Img from "../../../images/web3-img.jpg";

export default function Marketplace() {
  const { categoryLayoutChanged } = useContext(ToggleContext);

  const [hoveredState, setHoveredState] = useState({
    goods: false,
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
