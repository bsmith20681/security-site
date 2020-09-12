import React from "react"
import "../styles/components/toc.scss"
import star from "../images/star.png"

const TOC = props => {
  return (
    <div className="col-md-2 sticky">
      {Array.apply(5, { length: props.stars }).map((e, i) => (
        <img className="post-star" alt="star rating" src={star} key={i} />
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
        <button className="btnSmall btnGreen">{props.buttonTitle}</button>
      </a>
    </div>
  )
}

export default TOC
