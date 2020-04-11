import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

const Post = props => {
  return (
    <Layout>
      <SEO
        title={props.data.markdownRemark.frontmatter.title}
        description={
          props.data.markdownRemark.frontmatter.description ||
          props.data.markdownRemark.excerpt ||
          "nothin’"
        }
        image={
          props.data.markdownRemark.frontmatter.image.childImageSharp.sizes.src
        }
        pathname={props.data.markdownRemark.fields.slug}
        article
      />
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </Layout>
  )
}

export default Post
