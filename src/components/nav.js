import React, { useState } from 'react';
// import { Link } from "gatsby"

import "./nav.scss"

const Nav = ({ location, title, children }) => {

  const [colorMode, setColorMode] = useState(localStorage.getItem('color-theme'));  
  
  const handleClick = () => {
    if (colorMode === 'dark') {      
      setColorMode('light')
      localStorage.setItem('color-theme', 'light')
      document.documentElement.setAttribute('color-theme', 'light')
    } else {      
      setColorMode('dark')
      localStorage.setItem('color-theme', 'dark')
      document.documentElement.setAttribute('color-theme', 'dark')
    }
    
  };    

  return (
    <nav className="nav-wrapper">
      <div className="nav-header">
        <button onClick={handleClick}>
        {colorMode}
        </button>
      </div>
      <div className="sidebar-wrapper">
        <div className="side-1">b</div>
        <div className="side-2">c</div>
      </div>
    </nav>
  )
}

export default Nav