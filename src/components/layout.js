import * as React from "react"
import { Link } from "gatsby"

import Nav from "../components/nav"

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
    
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div>
    <Nav/>
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      
      <header className="global-header">{header}</header>      
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
    </div>

  )
}

export default Layout
