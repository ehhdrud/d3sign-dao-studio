import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Vision from "./components/headerComponents/categoryPage/Vision";
import About from "./components/headerComponents/categoryPage/About";
import Artists from "./components/headerComponents/categoryPage/Artists";
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
          </Routes>
        </HoveredIndexProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
