import React from "react"

const Recommend = props => {
  return (
    <div>
      <div className="recommend-title_border">
        <p className="recommend-title">Recommended</p>
      </div>
      <div className="recommend">
        <a href="">
          <img
            className="recommend-image"
            src={require("../images/vivint/vivint-logo.png")}
            alt="logo"
          />
        </a>
        <p>Best Overall</p>
        <a className="btnSmall btnPurple recommend-button" href="">
          See Packages
        </a>
      </div>
    </div>
  )
}

export default Recommend
