import React from "react"

const StickyHeader = props => {
  return (
    <div className="stickyheader row">
      <h3 id={props.id} className="stickyheader-title">
        {props.title}
      </h3>
      <a className="btnSmall btnGreen" href={props.link}>
        See All Packages
      </a>
    </div>
  )
}

export default StickyHeader
