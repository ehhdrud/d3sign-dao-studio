import React, { useContext } from 'react';
import { ToggleContext } from '../../../../store/ToggleContext';
import './styles/marketplacePage.css';

export default function HomeDecor() {
    const { categoryLayoutChanged } = useContext(ToggleContext);

    return (
        <div className={`marketplace-page ${categoryLayoutChanged ? 'rearranged' : ''}`}>
            <h1 className="homedecor-title">Home decor</h1>

            <p className="homedecor-prepare">These products are being prepared.</p>
        </div>
    );
}
