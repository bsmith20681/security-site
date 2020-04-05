import React from "react"
import { Link } from "gatsby"

const SideMenu = props => {
  return (
    <nav className="side-menu">
      <ul className="side-menu-list">
        <li className="nav-item">
          <Link to="/">Start Here</Link>
        </li>
        <li className="nav-item">
          <Link>Blog</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideMenu
