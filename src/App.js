import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToggleProvider } from "./store/ToggleContext.js";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer.js";
import "./App.css";

function App() {
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App" onContextMenu={handleContextMenu}>
      <ToggleProvider>
        <BrowserRouter>
          <Header />
          <Body />
          <Footer />
        </BrowserRouter>
      </ToggleProvider>
    </div>
  );
}

export default App;
