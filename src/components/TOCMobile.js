import React, { useState } from "react"
import "../styles/components/toc.scss"
import buttonStyles from "../styles/components/button.module.scss"
import caretDown from "../images/caret-down.svg"

const TOCMobile = props => {
  const [dropMenuOpen, setDropMenuOpen] = useState(false)

  const dropMenuClickHandler = () => {
    setDropMenuOpen(!dropMenuOpen)
  }

  const dropMenuKeyHandler = e => {
    if (e.keyCode === 13) {
      setDropMenuOpen(!dropMenuOpen)
    }
  }

  let dropMenuClasses = "hiddenMenu"
  let rotateCarot = "carot"
  if (dropMenuOpen) {
    dropMenuClasses = "showMenu"
    rotateCarot = "carot rotateCarot"
  }

  return (
    <div className="col-md-2 sticky toc text-center">
      <div
        className="row"
        style={{ justifyContent: "center" }}
        onClick={dropMenuClickHandler}
        onKeyDown={dropMenuKeyHandler}
        tabIndex="0"
        role="button"
      >
        <p>Table of contents</p>
        <img className={rotateCarot} src={caretDown} alt="open menu" />
      </div>
      <ul className={dropMenuClasses}>
        {props.titles.map(item => {
          return (
            <a className="toc-item" href={item.url}>
              <li>{item.title}</li>
            </a>
          )
        })}
      </ul>
      <a href={props.link}>
        <button className={`${buttonStyles.btnSmall} ${buttonStyles.btnGreen}`}>
          {props.buttonTitle}
        </button>
      </a>
    </div>
  )
}

export default TOCMobile
