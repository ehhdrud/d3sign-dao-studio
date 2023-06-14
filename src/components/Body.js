import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ToggleContext } from "../ToggleContext.js";
import Default from "./bodyComponents/Default";
import "./styles/body.css";

import WhatsOn from "./bodyComponents/categoryPage/WhatsOn";
import ArtAndArtists from "./bodyComponents/categoryPage/ArtsAndArtists";
import V1VI from "./bodyComponents/categoryPage/artsAndArtistPage/V1VI";
import P0LA from "./bodyComponents/categoryPage/artsAndArtistPage/P0LA";
import R0RO from "./bodyComponents/categoryPage/artsAndArtistPage/R0RO";
import T0RI from "./bodyComponents/categoryPage/artsAndArtistPage/T0RI";
import CHR1S from "./bodyComponents/categoryPage/artsAndArtistPage/CHR1S";
import ZER1 from "./bodyComponents/categoryPage/artsAndArtistPage/ZER1";
import J1N from "./bodyComponents/categoryPage/artsAndArtistPage/J1N";
import MIRR0R from "./bodyComponents/categoryPage/artsAndArtistPage/MIRR0R";
import PAUL0 from "./bodyComponents/categoryPage/artsAndArtistPage/PAUL0";
import R1N from "./bodyComponents/categoryPage/artsAndArtistPage/R1N";
import Marketplace from "./bodyComponents/categoryPage/Marketplace.js";
import Goods from "./bodyComponents/categoryPage/marketplacePage/Goods.js";
import HomeDecor from "./bodyComponents/categoryPage/marketplacePage/HomeDecor.js";
import Web3 from "./bodyComponents/categoryPage/marketplacePage/Web3.js";
import Faq from "./bodyComponents/categoryPage/Faq.js";

export default function Body() {
  const { deleteCategoryLayout } = useContext(ToggleContext);

  const handleHistory = () => {
    deleteCategoryLayout();
  };

  window.addEventListener("popstate", handleHistory);
  window.addEventListener("pushstate", handleHistory);

  return (
    <div className="body">
      <Routes>
        <Route path="/d3sign-dao-studio" element={<Default />} />
        <Route path="/d3sign-dao-studio/whatson" element={<WhatsOn />} />
        <Route
          path="/d3sign-dao-studio/artsandartists"
          element={<ArtAndArtists />}
        />
        <Route
          path="/d3sign-dao-studio/artsandartists/V1VI"
          element={<V1VI />}
        />
        <Route
          path="/d3sign-dao-studio/artsandartists/P0LA"
          element={<P0LA />}
        />
        <Route
          path="/d3sign-dao-studio/artsandartists/R0RO"
          element={<R0RO />}
        />
        <Route
          path="/d3sign-dao-studio/artsandartists/T0RI"
          element={<T0RI />}
        />
        <Route
          path="/d3sign-dao-studio/artsandartists/CHR1S"
          element={<CHR1S />}
        />
        <Route
          path="/d3sign-dao-studio/artsandartists/ZER1"
          element={<ZER1 />}
        />
        <Route path="/d3sign-dao-studio/artsandartists/J1N" element={<J1N />} />
        <Route
          path="/d3sign-dao-studio/artsandartists/MIRR0R"
          element={<MIRR0R />}
        />
        <Route
          path="/d3sign-dao-studio/artsandartists/PAUL0"
          element={<PAUL0 />}
        />
        <Route path="/d3sign-dao-studio/artsandartists/R1N" element={<R1N />} />
        <Route
          path="/d3sign-dao-studio/marketplace"
          element={<Marketplace />}
        />
        <Route
          path="/d3sign-dao-studio/marketplace/goods"
          element={<Goods />}
        />
        <Route
          path="/d3sign-dao-studio/marketplace/homedecor"
          element={<HomeDecor />}
        />
        <Route path="/d3sign-dao-studio/marketplace/web3" element={<Web3 />} />
        <Route path="/d3sign-dao-studio/faq" element={<Faq />} />
      </Routes>
    </div>
  );
}
