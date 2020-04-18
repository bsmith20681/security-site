import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import TOC from "../components/TOC"

import star from "../images/star.png"

import "../styles/components/post.scss"

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      tableOfContents
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        subTitle
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
  const displayTOC = () => {
    let width = window.innerWidth
    if (width > 768) {
      return (
        <TOC
          stars={frontmatter.starRating}
          titles={tableOfContents.items}
          link={frontmatter.affLink}
          buttonTitle={frontmatter.affTitle}
        />
      )
    } else {
      return <h1>hello on mobile</h1>
    }
  }
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || excerpt || "nothin’"}
        url={frontmatter.url}
        pathname={fields.slug}
        article
      />
      <div className="row" style={{ justifyContent: "center" }}>
        {Array.apply(5, { length: frontmatter.starRating }).map((e, i) => (
          <img className="post-star" src={star} key={i} />
        ))}
      </div>
      <h1 className="text-center post-title">{frontmatter.title}</h1>
      <h3 className="text-center post-subtitle">{frontmatter.subTitle}</h3>
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
        {displayTOC()}
        <div className="col-md-10">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  )
}

export default Post
