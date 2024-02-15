import React, { useEffect, useRef } from 'react';

import Layout from "../../components/layout"

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