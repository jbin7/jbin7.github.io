import React, { useState, useContext } from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import GlobalStateContext from '../context/GlobalStateContext';

import "./nav.scss"


const Nav = ({ location, title, children }) => {
  
  const { globalState, updateGlobalState } = useContext(GlobalStateContext);
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isMenuTransition, setIsMenuTransition] = useState(false)
  
  


  const handleColor = () => {
    if (globalState.colorTheme === 'dark') {      
      
      updateGlobalState({colorTheme: 'light'})
      localStorage.setItem('color-theme', 'light')      
      document.documentElement.setAttribute('color-theme', 'light')
    } else {      
      
      updateGlobalState({colorTheme: 'dark'})
      localStorage.setItem('color-theme', 'dark')
      document.documentElement.setAttribute('color-theme', 'dark')   
    }
    
  }

  const handleSidebar = () => {        
    updateGlobalState({isOpenSidebar: !globalState.isOpenSidebar, isSidebarTransition: true})   
  }

  const handleMenu = () => {
    setIsMenuTransition(true)    
    setIsOpenMenu(!isOpenMenu)            
  }  


  return (
    <div className="nav-wrapper">
      
      <div className="nav-header">
        <div className="header-left">      
          {globalState.colorTheme === "dark" ? (
            <button onClick={handleSidebar}>
              <StaticImage className="menu-icon" src="../images/icons/menu_light_icon.svg" alt="icon"/>
            </button>      
          ) : (
            <button onClick={handleSidebar}>
              <StaticImage className="menu-icon" src="../images/icons/menu_dark_icon.svg" alt="icon"/>
            </button>     
          )}                
        </div>

        <div className='header-center'>
          
          <Link to="/">
            <div className="logo-text" data-text="Jbin">Jbin</div>
            {/* <StaticImage className="logo-image" src="../images/gatsby-icon.png" alt="logo-image"/> */}
          </Link>
        </div>


        <div className='header-right'>
          {globalState.colorTheme === "dark" ? (
            <button onClick={handleMenu}>
              <StaticImage className="menu-icon" src="../images/icons/menu_light_icon.svg" alt="icon"/>
            </button>      
          ) : (
            <button onClick={handleMenu}>
              <StaticImage className="menu-icon" src="../images/icons/menu_dark_icon.svg" alt="icon"/>
            </button>     
          )}   
        </div>             
      </div>
      
      <div className={`nav-sidebar
        ${globalState.isOpenSidebar ? 'open' : 'close'}        
        ${globalState.isOpenSidebar && globalState.isSidebarTransition ? 'open-transition' : ''}
        ${!globalState.isOpenSidebar && globalState.isSidebarTransition  ? 'close-transition' : ''}`}
        >
        <nav className="side-1">
          <ul>         
            <li>
              <Link to="/showcase/profile">
                <StaticImage className="profile-img" src="../images/jbin_interactive_profile.png" alt="interactive-profile"/>
              </Link>              
            </li>
            {/* <li>
              <Link to="/showcase/sonaplayer">
              <StaticImage className="profile-img" src="../images/sonaEvolve.png" alt="sonaplayer"/>
              </Link>
            </li>             */}
            <li>
              <a href="https://github.com/jbin7" target="_blank" rel="noopener noreferrer">
                <StaticImage className="profile-img" src="../images/github-logo-1.jpg" alt="github"/>
              </a>
            </li>            
          </ul>
        </nav>
        <div className="side-2">
          <ul className='category-list'>
            <li>
              <Link to="/post"><h3>All Posts</h3></Link>
            </li>
            <li>
              <div className='group-label'>group1</div>
              <ul>
                <li><Link to="/post">category1</Link></li>
                <li><Link to="/post">category2</Link></li>
              </ul>
            </li>     
            <li>
              <div className='group-label'>group2</div>
              <ul>
                <li><Link to="/post">category1</Link></li>
                <li><Link to="/post">category2</Link></li>
              </ul>
            </li>               
          </ul>
          <div className='footer'>

            {globalState.colorTheme === "dark" ? (
              <button className="color-mode-btn" onClick={handleColor}>
                <StaticImage className="color-mode-icon" src="../images/icons/light_mode_icon.svg" alt="icon"/>
                <span>라이트모드</span>
              </button>
               
            ) : (
              <button className="color-mode-btn" onClick={handleColor}>
                <StaticImage className="color-mode-icon" src="../images/icons/dark_mode_icon.svg" alt="icon"/>
                <span>다크모드</span>
              </button>
            )}            
            <hr/>
            <div className="copyright">
            © {new Date().getFullYear()}, Jbin Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>              
            </div>
             
          </div>
                  
        </div>
        
        {globalState.isOpenSidebar && <div onClick={handleSidebar} className='other'> </div>}
      </div>

      <div className={`nav-menu         
        ${isOpenMenu ? 'open' : 'close'}        
        ${isOpenMenu && isMenuTransition ? 'open-transition' : ''}
        ${!isOpenMenu && isMenuTransition  ? 'close-transition' : ''}`} 
        onClick={handleMenu}>
        <nav>
          <ul>
            <li>
              <Link to="/post" className={`${isOpenMenu ? 'top' : ''}`}>Blog</Link>
            </li>        
            {/* <li>
              <Link to="/showcase" className={`${isOpenMenu ? 'bottom' : ''}`}>Showcase</Link>
            </li>                       */}
            <li>
              <Link to="/showcase/profile" className={`${isOpenMenu ? 'left' : ''}`}>Profile</Link>
            </li>
            <li>
              <Link to="/resume" className={`${isOpenMenu ? 'right' : ''}`}>Resume</Link>
            </li>      
            
          </ul>
        </nav>
      </div>    

    </div>
  )
}

export default Nav