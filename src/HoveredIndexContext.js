import React, { createContext, useContext, useState } from "react";

// createContext()를 통해 Context 객체를 생성해 'HoveredIndexContext'에 할당
// Context 객체는 Provider와 useContext를 통해 값을 제공받고 제공한다.
const HoveredIndexContext = createContext();

// 'HoveredIndexContext'에 담긴 Context 객체를 인자로 받는 uesContext()를 실행하는 함수 'useHoverIndex'를 정의
// 상태 변경이 발생하는 컴포넌트는 이 함수를 import하여 Context의 값을 읽어들일 수 있다.
export function useHoveredIndex() {
  return useContext(HoveredIndexContext);
}

// 내부에 지정된 컴포넌트에서 상태 변화가 일어나면 그 상태를 Context 객체에게 제공하는 역할을 하는 'HoveredIndexProvider' 함수 정의
export function HoveredIndexProvider({ children }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    // "Provider는 value를 통해 하위에 있는 컴포넌트에게 전역에서 관리되는 값을 전달한다."
    <HoveredIndexContext.Provider value={{ hoveredIndex, setHoveredIndex }}>
      {children}
    </HoveredIndexContext.Provider>
  );
}
