import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import post from "../styles/components/post.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        authorName
        lastUpdated
        authorImg {
          absolutePath
        }
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
        url={props.data.markdownRemark.frontmatter.url}
        pathname={props.data.markdownRemark.frontmatter.slug}
        article
      />
      <h1 className="text-center post-title">
        {props.data.markdownRemark.frontmatter.title}
      </h1>
      <h3 className="text-center post-subtitle"></h3>
      <div className="row post-info">
        <p>
          <span className="post-subInfo">Last Updated</span> <br />
          {props.data.markdownRemark.frontmatter.lastUpdated}
        </p>
        <img
          src={props.data.markdownRemark.frontmatter.authorImg.absolutePath}
          alt="Author's image"
        />
        <p>
          <span className="post-subInfo">Written By</span> <br />
          {props.data.markdownRemark.frontmatter.authorName}
        </p>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </Layout>
  )
}

export default Post
