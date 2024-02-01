import React, { useContext } from 'react';

import Nav from "../components/nav"
import GlobalStateContext from '../context/GlobalStateContext';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  if (localStorage.getItem('color-theme') == null) {
    const osColorTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    localStorage.setItem('color-theme', osColorTheme)
    document.documentElement.setAttribute('color-theme', osColorTheme)
  } else {
    document.documentElement.setAttribute('color-theme', localStorage.getItem('color-theme'))
  }  

  const { globalState } = useContext(GlobalStateContext);


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
