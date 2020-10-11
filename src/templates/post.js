import React from "react"
import { window } from "browser-monads"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import TOC from "../components/TOC"
import TOCMobile from "../components/TOCMobile"

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
        TOC
        affLink
        affTitle
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

      <div className="row" style={{ justifyContent: "center" }}>
        {Array.apply(5, { length: frontmatter.starRating }).map((e, i) => (
          <img className="post-star" alt="star rating" src={star} key={i} />
        ))}
      </div>
      <h1 className="text-center post-title">{frontmatter.title}</h1>
      <h3 className="text-center post-subtitle">{frontmatter.subTitle}</h3>
      <div className="row post-info">
        <div>
          <span className="post-subInfo">Last Updated</span>
          <p>{frontmatter.lastUpdated}</p>
        </div>
        <img src={frontmatter.authorImg.publicURL} alt="Author" />
        <div>
          <span className="post-subInfo">Written By</span>
          <p>{frontmatter.authorName}</p>
        </div>
      </div>

      {frontmatter.TOC === true ? (
        <div className="row">
          <React.Fragment>
            {" "}
            <TOC
              stars={frontmatter.starRating}
              titles={tableOfContents.items}
              link={frontmatter.affLink}
              buttonTitle={frontmatter.affTitle}
            />
            <TOCMobile
              titles={tableOfContents.items}
              link={frontmatter.affLink}
              buttonTitle={frontmatter.affTitle}
            />
            <div className="col-md-10 box">
              <MDXRenderer>{body}</MDXRenderer>
            </div>
          </React.Fragment>
        </div>
      ) : (
        <div className="row justify-content-center" style={{ padding: "5px" }}>
          <React.Fragment>
            <div className="col-md-8 box">
              <MDXRenderer>{body}</MDXRenderer>
            </div>
          </React.Fragment>
        </div>
      )}
    </Layout>
  )
}

export default Post
