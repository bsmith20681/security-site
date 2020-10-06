import React from "react"

const Recommend = props => {
  return (
    <div>
      <div className="recommend-title_border">
        <p className="recommend-title">{props.title}</p>
      </div>
      <div className="recommend-border">
        {props.info.map(item => (
          <>
            <div className="recommend">
              <a className="recommend-brandName_link" href={item.brandNameLink}>
                <h3 className="recommend-brandName">{item.brandName}</h3>
              </a>
              <p className="recommend-caption">{item.caption}</p>
              <a
                className="btnSmall btnPurple recommend-button"
                href={item.buttonLink}
              >
                See Packages
              </a>
            </div>
            <div className="recommend-border_bottom"></div>
          </>
        ))}
      </div>
    </div>
  )
}

export default Recommend
