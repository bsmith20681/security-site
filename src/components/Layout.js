import React from "react"

import Header from "./Header"
import Footer from "./Footer"
import "../styles/main.scss"

const Layout = props => {
  return (
    <div className="container">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
