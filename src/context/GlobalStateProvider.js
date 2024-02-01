import React, { useState } from 'react';
import GlobalStateContext from './GlobalStateContext';

const GlobalStateProvider = ({ children }) => {
  console.log()
  const [globalState, setGlobalState] = useState({
    // 초기 상태 값들
    isOpenSidebar: window.innerWidth < 1200 ? false : true,
    isSidebarTransition: false
  });


  const updateGlobalState = newState => {
    setGlobalState(prevState => ({
      ...prevState,
      ...newState,
    }));
  };

  return (
    <GlobalStateContext.Provider
      value={{ globalState, updateGlobalState }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
