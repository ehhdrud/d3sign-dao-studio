import React, { useContext } from 'react';
import { ToggleContext } from '../../../../store/ToggleContext';
import './styles/marketplacePage.css';

// import V1VI from "../../../../images/arts/V1VI/V1VI-00.webp";
// import P0LA from "../../../../images/arts/P0LA/P0LA-00.webp";
// import R0RO from "../../../../images/arts/R0RO/R0RO-00.webp";
// import T0RI from "../../../../images/arts/T0RI/T0RI-00.webp";
// import CHR1S from "../../../../images/arts/CHR1S/CHR1S-00.webp";
// import ZER1 from "../../../../images/arts/ZER1/ZER1-00.webp";
// import J1N from "../../../../images/arts/J1N/J1N-00.webp";
// import MIRR0R from "../../../../images/arts/MIRR0R/MIRR0R-00.webp";
// import PAUL0 from "../../../../images/arts/PAUL0/PAUL0-00.webp";
// import R1N from "../../../../images/arts/R1N/R1N-00.webp";

export default function HomeDecor() {
    const { categoryLayoutChanged } = useContext(ToggleContext);

    return (
        <div className={`marketplace-page ${categoryLayoutChanged ? 'rearranged' : ''}`}>
            <h1 className="homedecor-title">Home decor</h1>

            <p className="homedecor-prepare">These products are being prepared.</p>
        </div>
    );
}
