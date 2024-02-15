import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"


const BlogIndex = ({ data, location }) => {
  
  const siteTitle = 'jbin'
    
  return (
    <Layout location={location} title={siteTitle}>

      <Intro />

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
