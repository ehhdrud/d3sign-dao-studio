import React, { createContext, useContext, useState } from "react";

const HoveredIndexContext = createContext();

export function useHoveredIndex() {
  return useContext(HoveredIndexContext);
}

export function HoveredIndexProvider({ children }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <HoveredIndexContext.Provider value={{ hoveredIndex, setHoveredIndex }}>
      {children}
    </HoveredIndexContext.Provider>
  );
}
