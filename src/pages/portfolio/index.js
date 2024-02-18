import React, { useEffect, useRef } from 'react';

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import Profile from "./profile"

import "./portfolio.scss"

const PortfolioIndex = ({ data, location }) => {

  const ref = useRef();

  useEffect(() => {    

  }, [])   
  
  return (
    <Layout location={location}>
      <div className='portfolio' ref={ref}>
        
        {/* <div className='indicator'>
          <Link to='/portfolio/#intro' className='active'></Link>
          <Link to='/portfolio/#interactive_profile'></Link>     
          <Link to='/portfolio/#interactive_profile'></Link>     
          <Link to='/portfolio/#interactive_profile'></Link>          
        </div> */}

       
        
        <section id="target">          
          <Profile/>
        </section>        
       

      </div>
    </Layout>
  )
}

export default PortfolioIndex
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="웹 애플리케이션 개발자 Jbin 포트폴리오" />