import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Vision from "./components/headerComponents/categoryPage/Vision";
import About from "./components/headerComponents/categoryPage/About";
import Artists from "./components/headerComponents/categoryPage/Artists";
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
            <Route path="/vision" element={<Vision />} />
            <Route path="/about" element={<About />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/artists/V1VI" element={<V1VI />} />
            <Route path="/artists/P0LA" element={<P0LA />} />
            <Route path="/artists/R0RO" element={<R0RO />} />
            <Route path="/artists/T0RI" element={<T0RI />} />
            <Route path="/artists/CHR1S" element={<CHR1S />} />
            <Route path="/artists/ZER1" element={<ZER1 />} />
            <Route path="/artists/J1N" element={<J1N />} />
            <Route path="/artists/MIRR0R" element={<MIRR0R />} />
            <Route path="/artists/Paul0" element={<Paul0 />} />
            <Route path="/artists/R1N" element={<R1N />} />
          </Routes>
        </HoveredIndexProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
