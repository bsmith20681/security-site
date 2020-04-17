import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import star from "../images/star.png"

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
        starRating
        affLink
        affTitle
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
  console.log(tableOfContents.items)
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
      <div className="row">
        <div className="col-md-2">
          {Array.apply(5, { length: frontmatter.starRating }).map((e, i) => (
            <img className="post-star" src={star} key={i} />
          ))}
          <ul>
            {tableOfContents.items.map(item => {
              return (
                <a href={item.url}>
                  <li>{item.title}</li>
                </a>
              )
            })}
          </ul>
          <a href={frontmatter.affLink} className="btn btn-green">
            {frontmatter.affTitle}
          </a>
        </div>
        <div className="col-md-10">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  )
}

export default Post
