import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import star from "../images/star.png"

import "../styles/components/post.scss"
import "../styles/components/toc.scss"
import buttonStyles from "../styles/components/button.module.scss"

export const query = graphql`
query PostBySlug($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    body
    excerpt
    tableOfContents
    timeToRead
    fields {
      slug
    }
    frontmatter {
      title
      authorName
      date
      description
      lastUpdated
      authorImg {
        publicURL
      }
      starRating
      affLink
      affTitle
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
      <div className="row" style={{justifyContent: "center"}}>
      {Array.apply(5, { length: frontmatter.starRating }).map((e, i) => (
            <img className="post-star" src={star} key={i} />
          ))}
      </div>
      <h1 className="text-center post-title">{frontmatter.title}</h1>
      <h3 className="text-center post-subtitle"></h3>
      <div className="row post-info">
        <div>
          <span className="post-subInfo">Last Updated</span>
          <p>{frontmatter.lastUpdated}</p>
        </div>
        <img src={frontmatter.authorImg.publicURL} alt="Author's image" />
        <div>
          <span className="post-subInfo">Written By</span>
          <p>{frontmatter.authorName}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          {Array.apply(5, { length: frontmatter.starRating }).map((e, i) => (
            <img className="post-star" src={star} key={i} />
          ))}
          <ul className="toc">
            {tableOfContents.items.map(item => {
              return (
                <a className="toc-item" href={item.url}>
                  <li>{item.title}</li>
                </a>
              )
            })}
          </ul>
          <a href={frontmatter.affLink} >
            <button className={`${buttonStyles.btnSmall} ${buttonStyles.btnGreen}`}>{frontmatter.affTitle}</button>
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
