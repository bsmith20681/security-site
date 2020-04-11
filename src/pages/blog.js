import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/SEO"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }

            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO description="This is a description for the blog page" />
      <h1>Blog</h1>
      <ul>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li>
              <Link to={`/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default BlogPage
