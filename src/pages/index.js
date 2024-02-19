import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/items/intro"


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
export const Head = () => <Seo title="웹 애플리케이션 개발자 김정빈" />
