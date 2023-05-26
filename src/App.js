import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
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
import Paul0 from "./components/headerComponents/categoryPage/ArtistPage/Paul0";
import R1N from "./components/headerComponents/categoryPage/ArtistPage/R1N";
import Body from "./components/Body";
import { HoveredIndexProvider } from "./HoveredIndexContext.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HoveredIndexProvider>
          <Header />
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
            <Route path="/artsandartists/Paul0" element={<Paul0 />} />
            <Route path="/artsandartists/R1N" element={<R1N />} />
          </Routes>
        </HoveredIndexProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
