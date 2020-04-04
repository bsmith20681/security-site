import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const Index = () => {
  return (
    <Layout>
      <h1>Hello World!</h1>
      <Link to="/about">Go to about page</Link>
    </Layout>
  )
}

export default Index
