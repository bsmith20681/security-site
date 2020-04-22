import React from "react"
import { Link } from "gatsby"
import times from "../images/icon-close.svg"

const SideMenu = props => {
  let sideMenuClasses = "side-menu"
  if (props.show) {
    sideMenuClasses = "side-menu open"
  }
  return (
    <nav className={sideMenuClasses}>
      <div
        className="closeout"
        role="button"
        tabIndex="0"
        onClick={props.click}
        onKeyDown={props.key}
      >
        <img src={times} alt="closeout" />
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
