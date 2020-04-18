import React from "react"
import "../styles/components/toc.scss"
import buttonStyles from "../styles/components/button.module.scss"
import star from "../images/star.png"

const TOC = props => {
  return (
    <div className="col-md-2 sticky">
      {Array.apply(5, { length: props.stars }).map((e, i) => (
        <img className="post-star" src={star} key={i} />
      ))}
      <ul className="toc">
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

export default TOC
