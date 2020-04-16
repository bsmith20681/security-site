import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import "../styles/components/post.scss"

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        authorName
        date
        description
        lastUpdated
        authorImg {
          absolutePath
        }
      }
      body
      excerpt
      tableOfContents
      timeToRead
      fields {
        slug
      }
    }
  }
`

const Post = ({ data }) => {
  const { body, frontmatter, excerpt, tableOfContents, fields } = data.mdx
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || excerpt || "nothin’"}
        url={frontmatter.url}
        pathname={fields.slug}
        article
      />
      <h1 className="text-center post-title">{frontmatter.title}</h1>
      <h3 className="text-center post-subtitle"></h3>
      <div className="row post-info">
        <p>
          <span className="post-subInfo">Last Updated</span> <br />
          {frontmatter.lastUpdated}
        </p>
        <img src={frontmatter.authorImg.absolutePath} alt="Author's image" />
        <p>
          <span className="post-subInfo">Written By</span> <br />
          {frontmatter.authorName}
        </p>
      </div>
      <div>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default Post
