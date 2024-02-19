import React, { useEffect } from 'react';

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import "./index.scss"

import SonaPlayer from "../../../components/apps/youtubePlayer"



const Index = ({ data, location }) => {
  

  useEffect(() => {    
    
  }, [])   
  
  return (
    <Layout location={location}>      
      <SonaPlayer />
    </Layout>
  )
}

export default Index
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="DJ SONA player" />