import React, { useState } from "react"
import { Link } from "gatsby"

import SideMenuButton from "./SideMenuButton"
import SideMenu from "./SideMenu"
import BackDrop from "./BackDrop"

import logoHeader from "../images/your-home-security-expert-logo.png"

import "../styles/index.scss"

const Header = props => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false)

  const sideMenuClickHandler = () => {
    setSideMenuOpen(!sideMenuOpen)
  }

  let sideMenu
  let backDrop
  if (sideMenuOpen) {
    sideMenu = <SideMenu />
    backDrop = <BackDrop />
  }
  return (
    <header>
      <div className="container">
        <div className="row nav">
          <Link to="/">
            <img
              className="logo"
              src={logoHeader}
              alt="yourhomesecurityexpert.com logo"
            />
          </Link>
          <ul className="nav-item-list">
            <SideMenuButton click={sideMenuClickHandler} />
            {sideMenu}
            {backDrop}
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
        </div>
      </div>
    </header>
  )
}

export default Header
