import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HelmetProvider } from 'react-helmet-async';
import { hydrate, render } from 'react-dom';

const rootElement = document.getElementById('root');

const app = (
    <React.StrictMode>
        <BrowserRouter>
            <HelmetProvider>
                <App />
            </HelmetProvider>
        </BrowserRouter>
    </React.StrictMode>
);

if (rootElement?.hasChildNodes()) {
    hydrate(app, rootElement);
} else {
    render(app, rootElement);
}

reportWebVitals();
