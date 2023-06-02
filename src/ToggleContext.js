import React, { createContext, useState } from "react";

export const ToggleContext = createContext();

export function ToggleProvider({ children }) {
  const [categoryLayoutChanged, setCategoryLayoutChanged] = useState(false);

  const toggleCategoryLayout = () => {
    setCategoryLayoutChanged(!categoryLayoutChanged);
  };

  const deleteCategoryLayout = (event) => {
    const targetClass = event.target.className;
    if (
      (!targetClass.includes("toggle") && !targetClass.includes("category")) ||
      targetClass.includes("category-text")
    ) {
      setCategoryLayoutChanged(false);
    }
  };

  return (
    <ToggleContext.Provider
      value={{
        categoryLayoutChanged,
        toggleCategoryLayout,
        deleteCategoryLayout,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
}
