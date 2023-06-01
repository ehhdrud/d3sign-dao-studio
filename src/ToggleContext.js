import React, { createContext, useState } from "react";

export const ToggleContext = createContext();

export function ToggleProvider({ children }) {
  const [categoryLayoutChanged, setCategoryLayoutChanged] = useState(false);

  const toggleCategoryLayout = () => {
    setCategoryLayoutChanged(!categoryLayoutChanged);
    console.log(categoryLayoutChanged);
  };

  const deleteCategoryLayout = (event) => {
    const targetClass = event.target.className;
    if (!targetClass.includes("toggle") && !targetClass.includes("category")) {
      // console.log(targetClass);
      setCategoryLayoutChanged(false);
    }
    console.log(categoryLayoutChanged);
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
