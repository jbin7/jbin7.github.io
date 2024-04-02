import React, { useState, useEffect } from 'react';

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import "./index.scss"



const Index = ({ data, location }) => {
  
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    window.addEventListener('message', e => {
      if(e.data.isReady === true) {
        setIsReady(true)
      }
    });
    return () => {

    };
  }, []);  
  
  return (
    <Layout location={location}>
      <div className='interactive-profile-container'>      

        {isReady ? (
          <div></div>          
        ) : (
          <div className='loading-text'>
          loading..
          </div>          
        )}


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