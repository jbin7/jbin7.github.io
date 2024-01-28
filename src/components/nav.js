import React, { useState, useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import "./nav.scss"

const Nav = ({ location, title, children }) => {

  const [colorMode, setColorMode] = useState(localStorage.getItem('color-theme'))
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isTransition, setIsTransition] = useState(false)    



  const handleColor = () => {
    if (colorMode === 'dark') {      
      setColorMode('light')
      localStorage.setItem('color-theme', 'light')
      document.documentElement.setAttribute('color-theme', 'light')
      
      document.documentElement.classList.add('fadein')
      window.setTimeout(()=> {
        document.documentElement.classList.remove('fadein')
      },500)
    } else {      
      setColorMode('dark')
      localStorage.setItem('color-theme', 'dark')
      document.documentElement.setAttribute('color-theme', 'dark')

      document.documentElement.classList.add('fadein')
      window.setTimeout(()=> {
        document.documentElement.classList.remove('fadein')
      },500)      
    }
    
  }

  const handleMenu = () => {
    setIsTransition(true)    
    setIsOpenMenu(!isOpenMenu)            
  }

  const handleResize = ()=> {
    if(window.innerWidth < 800) {
      setIsOpenMenu(false)      
    } else {
      setIsOpenMenu(true)      
    }
  }


  useEffect(() => {

    if(window.innerWidth < 800) {        
      setIsOpenMenu(false)
    } else {      
      setIsOpenMenu(false)       
    }     

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    <nav className="nav-wrapper">
      <div className="nav-header">
        <div className="header-left">      

            {colorMode === "dark" ? (
              <button onClick={handleMenu}>
                <StaticImage className="menu-icon" src="../images/icons/menu_light_icon.svg" alt="icon"/>
              </button>      
            ) : (
              <button onClick={handleMenu}>
                <StaticImage className="menu-icon" src="../images/icons/menu_dark_icon.svg" alt="icon"/>
              </button>     
            )}                

     
        </div>
        <div className='header-center'>
          {/* <div className="title-text">Jbin</div> */}
          <Link to="/">
            <StaticImage className="logo-image" src="../images/gatsby-icon.png" alt="logo-image"/>
          </Link>
        </div>
        <div className='header-right'>

        </div>

     
      </div>
      <div className={`sidebar-wrapper 
        ${isOpenMenu ? 'open' : ''}
        ${!isOpenMenu  ? 'close' : ''}
        ${isOpenMenu && isTransition ? 'open-transition' : ''}
        ${!isOpenMenu && isTransition  ? 'close-transition' : ''}`}
        >
        <div className="side-1">
          <ul>
          <li>
              <Link to="/resume" target="_blank" rel="noopener noreferrer">
                <StaticImage className="profile-img" src="../images/resume.png" alt="Profile picture"/>
              </Link>
            </li>            
            <li>
              <a href="https://glowing-sawine-7a9024.netlify.app/" target="_blank" rel="noopener noreferrer">
                <StaticImage className="profile-img" src="../images/jbin_interactive_profile.png" alt="Profile picture"/>
              </a>
            </li>
            <li>
              <a href="https://github.com/jbin7" target="_blank" rel="noopener noreferrer">
                <StaticImage className="profile-img" src="../images/github.png" alt="Profile picture"/>
              </a>
            </li>            
          </ul>
        </div>
        <div className="side-2">
          <div className='footer'>

            {colorMode === "dark" ? (
              <button className="color-mode-btn" onClick={handleColor}>
                <StaticImage className="color-mode-icon" src="../images/icons/light_mode_icon.svg" alt="icon"/>
                <span>라이트테마</span>
              </button>
               
            ) : (
              <button className="color-mode-btn" onClick={handleColor}>
                <StaticImage className="color-mode-icon" src="../images/icons/dark_mode_icon.svg" alt="icon"/>
                <span>다크테마</span>
              </button>
            )}            
            <hr/>
            <div className="copyright">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>              
            </div>
             
          </div>
                  
        </div>
        
        {isOpenMenu && <button onClick={handleMenu} className='other'> </button>}
      </div>      
    </nav>
  )
}

export default Nav