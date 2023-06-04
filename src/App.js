import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HoveredIndexProvider } from "./HoveredIndexContext.js";
import { ToggleProvider } from "./ToggleContext.js";
import Header from "./components/Header";
import Sns from "./components/Sns.js";
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
import Body from "./components/Body";
import "./App.css";

function App() {
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App" onContextMenu={handleContextMenu}>
      <BrowserRouter>
        <ToggleProvider>
          <HoveredIndexProvider>
            <Header />
            <Sns />
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/whatson" element={<WhatsOn />} />
              <Route path="/artsandartists" element={<ArtAndArtists />} />
              <Route path="/artsandartists/V1VI" element={<V1VI />} />
              <Route path="/artsandartists/P0LA" element={<P0LA />} />
              <Route path="/artsandartists/R0RO" element={<R0RO />} />
              <Route path="/artsandartists/T0RI" element={<T0RI />} />
              <Route path="/artsandartists/CHR1S" element={<CHR1S />} />
              <Route path="/artsandartists/ZER1" element={<ZER1 />} />
              <Route path="/artsandartists/J1N" element={<J1N />} />
              <Route path="/artsandartists/MIRR0R" element={<MIRR0R />} />
              <Route path="/artsandartists/PAUL0" element={<PAUL0 />} />
              <Route path="/artsandartists/R1N" element={<R1N />} />
            </Routes>
          </HoveredIndexProvider>
        </ToggleProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
