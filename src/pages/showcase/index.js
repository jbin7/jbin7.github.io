import React, { useEffect } from 'react';

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import "./showcase.scss"




const ShowcaseIndex = ({ data, location }) => {
  

  useEffect(() => {    
    
  }, [])   
  
  return (
    <Layout location={location}>      
      <div className='showcase turn-on'>
        
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
export const Head = () => <Seo title="Showcase" />