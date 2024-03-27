import React, { useEffect } from 'react';

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import "./index.scss"



const Index = ({ data, location }) => {
  

  useEffect(() => {    
    
  }, [])   
  
  return (
    <Layout location={location}>
      <div className='interactive-profile-container'>        
        <iframe title="interactive-profile" src="https://glowing-sawine-7a9024.netlify.app/" width="100%"height="100%"></iframe>
      </div>        
    </Layout>
  )
}

export default Index
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="interactive-profile" />