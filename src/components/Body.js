import React, { useContext, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToggleContext } from '../store/ToggleContext.js';
import { SyncLoader } from 'react-spinners';
import './styles/body.css';

import Default from './bodyComponents/Default';
import WhatsOn from './bodyComponents/categoryPage/WhatsOn';
import Marketplace from './bodyComponents/categoryPage/Marketplace.js';
import Goods from './bodyComponents/categoryPage/marketplacePage/Goods.js';
import HomeDecor from './bodyComponents/categoryPage/marketplacePage/HomeDecor.js';
import Web3 from './bodyComponents/categoryPage/marketplacePage/Web3.js';
import Faq from './bodyComponents/categoryPage/Faq.js';

const ArtAndArtists = lazy(() => import('./bodyComponents/categoryPage/ArtsAndArtists'));
const V1VI = lazy(() => import('./bodyComponents/categoryPage/artsAndArtistPage/V1VI'));
const P0LA = lazy(() => import('./bodyComponents/categoryPage/artsAndArtistPage/P0LA'));
const R0RO = lazy(() => import('./bodyComponents/categoryPage/artsAndArtistPage/R0RO'));
const T0RI = lazy(() => import('./bodyComponents/categoryPage/artsAndArtistPage/T0RI'));
const CHR1S = lazy(() => import('./bodyComponents/categoryPage/artsAndArtistPage/CHR1S'));
const ZER1 = lazy(() => import('./bodyComponents/categoryPage/artsAndArtistPage/ZER1'));
const J1N = lazy(() => import('./bodyComponents/categoryPage/artsAndArtistPage/J1N'));
const MIRR0R = lazy(() => import('./bodyComponents/categoryPage/artsAndArtistPage/MIRR0R'));
const PAUL0 = lazy(() => import('./bodyComponents/categoryPage/artsAndArtistPage/PAUL0'));
const R1N = lazy(() => import('./bodyComponents/categoryPage/artsAndArtistPage/R1N'));

export default function Body() {
    const { deleteCategoryLayout } = useContext(ToggleContext);

    const handleHistory = () => {
        deleteCategoryLayout();
    };

    window.addEventListener('popstate', handleHistory);
    window.addEventListener('pushstate', handleHistory);

    return (
        <div className="body">
            <Suspense
                fallback={
                    <div className="loading">
                        <SyncLoader color={'#36d7b7'} size={7} />
                    </div>
                }
            >
                <Routes>
                    <Route path="/" element={<Default />} />
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
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/marketplace/goods" element={<Goods />} />
                    <Route path="/marketplace/homedecor" element={<HomeDecor />} />
                    <Route path="/marketplace/web3" element={<Web3 />} />
                    <Route path="/faq" element={<Faq />} />
                </Routes>
            </Suspense>
        </div>
    );
}
