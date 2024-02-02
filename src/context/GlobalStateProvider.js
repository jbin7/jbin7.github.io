import React, { useState } from 'react';
import GlobalStateContext from './GlobalStateContext';

const GlobalStateProvider = ({ children }) => {
  
  const [globalState, setGlobalState] = useState({
    // 초기 상태 값들
    colorTheme: '',
    isOpenSidebar: false,
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
