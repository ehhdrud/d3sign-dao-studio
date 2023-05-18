import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Vision from "./components/headerComponents/categoryPage/Vision";
import About from "./components/headerComponents/categoryPage/About";
import Artist from "./components/headerComponents/categoryPage/Artist";
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
            <Route path="/artist" element={<Artist />} />
          </Routes>
        </HoveredIndexProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
