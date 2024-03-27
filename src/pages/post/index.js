import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import PostList from "../../components/PostList"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes  

  if (posts.length === 0) {
    return (

      <Layout location={location} title={siteTitle}>
      <div className="post-container">
        <main>
          <div className="no-post">
            <p>No posts have been created.</p>
          </div>       
        </main>
      </div>
      </Layout>      
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <div className="post-container">
        <main>
          <h3>All Posts</h3>
          <PostList posts={posts}/>          
        </main>
      </div>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          thumbnail {
            childImageSharp {
              fixed(width: 200, height: 200) {
                src
              }
            }
          }          
        }
      }
    }
  }
`
