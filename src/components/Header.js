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

  const closeClickHandler = () => {
    setSideMenuOpen(false)
  }

  let backDrop
  if (sideMenuOpen) {
    backDrop = <BackDrop click={closeClickHandler} />
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
          <SideMenuButton click={sideMenuClickHandler} />
          {backDrop}
          <ul className="nav-item-list">
            <li className="nav-item">
              <Link to="/">Start Here</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
          </ul>
          <SideMenu show={sideMenuOpen} click={closeClickHandler} />
        </div>
      </div>
    </header>
  )
}

export default Header
