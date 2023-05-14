import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Vision from "./components/headerComponents/categoryPage/Vision";
import About from "./components/headerComponents/categoryPage/About";
import Artist from "./components/headerComponents/categoryPage/Artist";
import Body from "./components/Body";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/vision" element={<Vision />} />
          <Route path="/about" element={<About />} />
          <Route path="/artist" element={<Artist />} />
        </Routes>
        <Body />
      </BrowserRouter>
    </div>
  );
}

export default App;
