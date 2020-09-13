import React from "react"

const BackDrop = props => {
  let backDropClasses = ""
  if (props.show) {
    backDropClasses = "backdrop"
  }
  return (
    <div
      className={backDropClasses}
      role="button"
      tabIndex="0"
      onClick={props.click}
      onKeyDown={props.key}
    />
  )
}

export default BackDrop
