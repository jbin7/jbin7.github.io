import React, { useEffect } from 'react';

import Layout from "../../components/layout"
import Seo from "../../components/seo"


const ShowcaseIndex = ({ data, location }) => {
  

  useEffect(() => {    

  }, [])   
  
  return (
    <Layout location={location}>
      <div>

      </div>
    </Layout>
  )
}

export default ShowcaseIndex
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="웹 애플리케이션 개발자 Jbin 포트폴리오" />