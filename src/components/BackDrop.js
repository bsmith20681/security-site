import React from "react"

const BackDrop = props => {
  return (
    <div
      className="backdrop"
      role="button"
      tabIndex="0"
      onClick={props.click}
      onKeyDown={props.key}
    />
  )
}

export default BackDrop
