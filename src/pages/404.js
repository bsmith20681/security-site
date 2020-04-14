import React from "react"

import Layout from "../components/Layout"

const NotFound = () => {
  return (
    <Layout>
      <div className="container">
        <div
          className="row"
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
            marginBottom: 50,
          }}
        >
          <div>
            <h1>404 Error</h1>
            <p>The page you are looking for does not exist</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFound
