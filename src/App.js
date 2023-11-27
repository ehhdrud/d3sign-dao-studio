import React from 'react';
import { ToggleProvider } from './store/ToggleContext.js';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer.js';
import './App.css';
import { MetasPageDefault } from './metadatas/metadatas.js';

function App() {
    const handleContextMenu = (e) => {
        e.preventDefault();
    };

    return (
        <div className="App" onContextMenu={handleContextMenu}>
            <MetasPageDefault></MetasPageDefault>
            <ToggleProvider>
                <Header />
                <Body />
                <Footer />
            </ToggleProvider>
        </div>
    );
}

export default App;
