import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HoveredIndexProvider } from "./HoveredIndexContext.js";
import { ToggleProvider } from "./ToggleContext.js";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer.js";
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
            <Body />
            <Footer />
          </HoveredIndexProvider>
        </ToggleProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
