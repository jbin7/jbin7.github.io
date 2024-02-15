import React, { useEffect, useContext, useState } from 'react';

import Nav from "../components/nav"
import GlobalStateContext from '../context/GlobalStateContext';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  
  const { globalState, updateGlobalState } = useContext(GlobalStateContext);
  const [appWidth, setAppWidth] = useState()

  useEffect(() => {

    if (localStorage.getItem('color-theme') == null) {      
      localStorage.setItem('color-theme', 'dark')
      document.documentElement.setAttribute('color-theme', 'dark')
      updateGlobalState({colorTheme: 'dark'})
    } else {
      document.documentElement.setAttribute('color-theme', localStorage.getItem('color-theme'))
      updateGlobalState({colorTheme: localStorage.getItem('color-theme')})
    }        
    
    updateGlobalState({      
      isSidebarTransition: false
    })       

    if (window.innerWidth < 1200) {
      updateGlobalState({isOpenSidebar: false})
    }


    
    const handleResize = ()=> {
      setAppWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    }    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])    

  useEffect(() => {
    
    if (globalState.isOpenSidebar === true && appWidth < 1200) {
      updateGlobalState({isOpenSidebar: false})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appWidth])      


  if (isRootPath) {
    // header = (
    //   <h1 className="main-heading">
    //     <Link to="/">{title}</Link>
    //   </h1>
    // )
  } else {
    // header = (
    //   <Link className="header-link-home" to="/">
    //     {title}
    //   </Link>
    // )
  }

  return (
    <div>
      <Nav/>
      <div className={`global-wrapper   
        ${globalState.isOpenSidebar ? 'side-open' : 'side-close'}
        ${globalState.isOpenSidebar && globalState.isSidebarTransition ? 'open-transition' : ''}
        ${!globalState.isOpenSidebar && globalState.isSidebarTransition ? 'close-transition' : ''}
        `}
        data-is-root-path={isRootPath}>
        {/* <header className="global-header">{header}</header>    */}
        <main>{children}</main>
        {/* <footer></footer>      */}
      </div>
    </div>

  )
}

export default Layout
