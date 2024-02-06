import React, { useEffect, useContext } from 'react';

import Nav from "../components/nav"
import GlobalStateContext from '../context/GlobalStateContext';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const { updateGlobalState } = useContext(GlobalStateContext);


  useEffect(() => {

    if (localStorage.getItem('color-theme') == null) {      
      localStorage.setItem('color-theme', 'dark')
      document.documentElement.setAttribute('color-theme', 'dark')
    } else {
      document.documentElement.setAttribute('color-theme', localStorage.getItem('color-theme'))
    }        
    
    updateGlobalState({
      colorTheme: localStorage.getItem('color-theme'),
      isOpenSidebar: false, 
      isSidebarTransition: false
    })       
        
    return () => {
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])    


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
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        {/* <header className="global-header">{header}</header>    */}
        <main>{children}</main>
        {/* <footer></footer>      */}
      </div>
    </div>

  )
}

export default Layout
