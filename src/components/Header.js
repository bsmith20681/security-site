import React, { useState } from "react"
import { Link } from "gatsby"

import SideMenuButton from "./SideMenuButton"
import SideMenu from "./SideMenu"
import BackDrop from "./BackDrop"

import logoHeader from "../images/your-home-security-expert-logo.png"

import "../styles/main.scss"

const Header = props => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false)

  const sideMenuClickHandler = () => {
    setSideMenuOpen(!sideMenuOpen)
  }

  const closeClickHandler = () => {
    setSideMenuOpen(!sideMenuOpen)
  }

  const closeKeyHandler = e => {
    if (e.keyCode === 8) {
      setSideMenuOpen(false)
    }
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
          <BackDrop
            click={closeClickHandler}
            show={sideMenuOpen}
            key={closeKeyHandler}
          />
          <ul className="nav-item-list">
            <li className="nav-item">
              <Link to="/">Start Here</Link>
            </li>
            <li className="nav-item">
              <Link to="/posts/react/">Home Security Systems</Link>
            </li>
            <li className="nav-item">
              <Link to="/posts/how-to-cancel-adt">DIY Security Systems</Link>
            </li>
            <li className="nav-item">
              <Link to="/posts/vivint-review">Home Security Cameras</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About Me</Link>
            </li>
          </ul>
          <SideMenu
            show={sideMenuOpen}
            click={closeClickHandler}
            key={closeKeyHandler}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
