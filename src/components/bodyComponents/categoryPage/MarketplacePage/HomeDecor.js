import React, { useContext } from "react";
import { ToggleContext } from "../../../../ToggleContext";
import "./styles/marketplacePage.css";

// import V1VI from "../../../../images/arts/V1VI/V1VI-00.png";
// import P0LA from "../../../../images/arts/P0LA/P0LA-00.png";
// import R0RO from "../../../../images/arts/R0RO/R0RO-00.png";
// import T0RI from "../../../../images/arts/T0RI/T0RI-00.png";
// import CHR1S from "../../../../images/arts/CHR1S/CHR1S-00.png";
// import ZER1 from "../../../../images/arts/ZER1/ZER1-00.png";
// import J1N from "../../../../images/arts/J1N/J1N-00.png";
// import MIRR0R from "../../../../images/arts/MIRR0R/MIRR0R-00.png";
// import PAUL0 from "../../../../images/arts/PAUL0/PAUL0-00.png";
// import R1N from "../../../../images/arts/R1N/R1N-00.png";

export default function HomeDecor() {
  const { categoryLayoutChanged } = useContext(ToggleContext);

  return (
    <div
      className={`marketplace-page ${
        categoryLayoutChanged ? "rearranged" : ""
      }`}
    >
      <h1 className="homedecor-title">Home decor</h1>

      <p className="homedecor-text">The products are being prepared.</p>
    </div>
  );
}
