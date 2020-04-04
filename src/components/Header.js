import React from "react"
import { Link } from "gatsby"

import "../styles/index.scss"

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row nav">
          <h1>Logo</h1>
          <ul className="nav-item-list">
            <li className="nav-item">
              <Link>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
