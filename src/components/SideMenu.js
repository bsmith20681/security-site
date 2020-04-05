import React from "react"
import { Link } from "gatsby"

const SideMenu = props => {
  let sideMenuClasses = 'side-menu'
  if(props.show){
    sideMenuClasses = 'side-menu open'
  }
  return (
    <nav className={sideMenuClasses}>
      <div className="closeout" onClick={props.click}>
          <div id="closeout-one"/>
          <div id="closeout-two"/>
      </div>
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
