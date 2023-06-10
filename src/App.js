import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HoveredIndexProvider } from "./HoveredIndexContext.js";
import { ToggleProvider } from "./ToggleContext.js";
import Header from "./components/Header";
import Footer from "./components/Footer.js";
import WhatsOn from "./components/headerComponents/categoryPage/WhatsOn";
import ArtAndArtists from "./components/headerComponents/categoryPage/ArtsAndArtists";
import V1VI from "./components/headerComponents/categoryPage/ArtistPage/V1VI";
import P0LA from "./components/headerComponents/categoryPage/ArtistPage/P0LA";
import R0RO from "./components/headerComponents/categoryPage/ArtistPage/R0RO";
import T0RI from "./components/headerComponents/categoryPage/ArtistPage/T0RI";
import CHR1S from "./components/headerComponents/categoryPage/ArtistPage/CHR1S";
import ZER1 from "./components/headerComponents/categoryPage/ArtistPage/ZER1";
import J1N from "./components/headerComponents/categoryPage/ArtistPage/J1N";
import MIRR0R from "./components/headerComponents/categoryPage/ArtistPage/MIRR0R";
import PAUL0 from "./components/headerComponents/categoryPage/ArtistPage/PAUL0";
import R1N from "./components/headerComponents/categoryPage/ArtistPage/R1N";
import Marketplace from "./components/headerComponents/categoryPage/Marketplace.js";
import Goods from "./components/headerComponents/categoryPage/MarketplacePage/Goods.js";
import HomeDecor from "./components/headerComponents/categoryPage/MarketplacePage/HomeDecor.js";
import Web3 from "./components/headerComponents/categoryPage/MarketplacePage/Web3.js";
import Faq from "./components/headerComponents/categoryPage/Faq.js";
import Body from "./components/Body";
import "./App.css";

function App() {
  // const handleContextMenu = (e) => {
  //   e.preventDefault();
  // };

  return (
    // <div className="App" onContextMenu={handleContextMenu}>
    <div className="App">
      <BrowserRouter>
        <ToggleProvider>
          <HoveredIndexProvider>
            <Header />

            <Routes>
              <Route path="/d3sign-dao-studio" element={<Body />} />
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
              <Route
                path="/d3sign-dao-studio/artsandartists/J1N"
                element={<J1N />}
              />
              <Route
                path="/d3sign-dao-studio/artsandartists/MIRR0R"
                element={<MIRR0R />}
              />
              <Route
                path="/d3sign-dao-studio/artsandartists/PAUL0"
                element={<PAUL0 />}
              />
              <Route
                path="/d3sign-dao-studio/artsandartists/R1N"
                element={<R1N />}
              />
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
              <Route
                path="/d3sign-dao-studio/marketplace/web3"
                element={<Web3 />}
              />
              <Route path="/d3sign-dao-studio/faq" element={<Faq />} />
            </Routes>
            <Footer />
          </HoveredIndexProvider>
        </ToggleProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
