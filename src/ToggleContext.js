import React, { createContext, useState } from "react";

export const ToggleContext = createContext();

export function ToggleProvider({ children }) {
  const [categoryLayoutChanged, setCategoryLayoutChanged] = useState(false);

  const toggleCategoryLayout = () => {
    setCategoryLayoutChanged(!categoryLayoutChanged);
  };

  const deleteCategoryLayout = () => {
    setCategoryLayoutChanged(false);
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
