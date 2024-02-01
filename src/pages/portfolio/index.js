import React, { useEffect } from 'react';

import Layout from "../../components/layout"

import Intro from "./intro"

import "./portfolio.scss"

const PortfolioIndex = ({ data, location }) => {

  useEffect(() => {

    return () => {
      
    }
  }, [])   
  
  return (
    <Layout location={location}>
      <div className='portfolio'>
        {/* <iframe src="https://glowing-sawine-7a9024.netlify.app/" allowfullscreen></iframe> */}
        <Intro/>
      </div>
    </Layout>
  )
}

export default PortfolioIndex