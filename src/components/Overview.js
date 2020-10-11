import React from "react"

/*

<Overview
  pros={["test"]}
  cons={["test"]}
  price="This price is $59 per month"
  contract="month to month"
/>

*/

const Overview = props => {
  return (
    <div>
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <p className="overview-title">
            <strong>Pros</strong>
          </p>
          <div className="overview-underline"></div>
          <ul className="overview-item-list">
            {props.pros.map(item => (
              <li className="overview-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#3EC91E"
                  width="24"
                  height="24"
                  className="overview-item-icon"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z" />
                </svg>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6 col-xs-12">
          <p className="overview-title">
            <strong>Cons</strong>
          </p>
          <div className="overview-underline"></div>
          <ul className="overview-item-list">
            {props.cons.map(item => (
              <li className="overview-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="grey"
                  className="overview-item-icon"
                >
                  <path d="M0 10h24v4h-24z" />
                </svg>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row">
        {props.contract != null ? (
          <div className="col-md-12 col-xs-12">
            <p className="overview-title">
              <strong>Contract</strong>
            </p>
            <div className="overview-underline"></div>
            <p>{props.contract}</p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="row">
        {props.price != null ? (
          <div className="col-md-12 col-xs-12">
            <p className="overview-title">
              <strong>Price</strong>
            </p>
            <div className="overview-underline"></div>
            <p>{props.price}</p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default Overview
