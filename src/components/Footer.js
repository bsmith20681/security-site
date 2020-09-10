import React from "react"
import { Link } from "gatsby"

import logoFooter from "../images/your-home-security-expert-logo.png"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row footer">
          <div className="col-md-12">
            <img
              className="logo"
              src={logoFooter}
              alt="yourhomesecurityexpert.com logo"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <h4>HOME SECURITY</h4>
            <ul className="footer-item-list">
              <li className="footer-item">
                <Link>Article 1</Link>
              </li>
              <li className="footer-item">
                <Link>Article 2</Link>
              </li>
              <li className="footer-item">
                <Link>Article 3</Link>
              </li>
              <li className="footer-item">
                <Link>Article 4</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <h4>DIY SYSTEMS</h4>
            <ul className="footer-item-list">
              <li className="footer-item">
                <Link>Article 1</Link>
              </li>
              <li className="footer-item">
                <Link>Article 2</Link>
              </li>
              <li className="footer-item">
                <Link>Article 3</Link>
              </li>
              <li className="footer-item">
                <Link>Article 4</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <h4>COMPARASIONS</h4>
            <ul className="footer-item-list">
              <li className="footer-item">
                <Link>Article 1</Link>
              </li>
              <li className="footer-item">
                <Link>Article 2</Link>
              </li>
              <li className="footer-item">
                <Link>Article 3</Link>
              </li>
              <li className="footer-item">
                <Link>Article 4</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <h4>ABOUT</h4>
            <ul className="footer-item-list">
              <li className="footer-item">
                <Link to="/about">About Me</Link>
              </li>
              <li className="footer-item">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="footer-item">
                <Link to="/terms-of-use">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
