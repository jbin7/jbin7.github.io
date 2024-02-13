import React, { useEffect, useRef } from 'react';
import { Link } from "gatsby"

import Layout from "../../components/layout"

import Intro from "./intro"
import Profile from "./profile"

import "./portfolio.scss"

const PortfolioIndex = ({ data, location }) => {

  const ref = useRef();

  useEffect(() => {    
    ref.current.addEventListener('scroll', (e)=> {
      let count = 3
      let height = ref.current.scrollHeight - ref.current.clientHeight      
      let currentScroll = ref.current.scrollTop
      if( currentScroll < 1) {
        return
      }
      let a = (currentScroll/height) * 100            

    })
  }, [])   
  
  return (
    <Layout location={location}>
      <div className='portfolio' ref={ref}>
        
        <div className='indicator'>
          <Link to='/portfolio/#intro' className='active'></Link>
          <Link to='/portfolio/#interactive_profile'></Link>     
          <Link to='/portfolio/#interactive_profile'></Link>     
          <Link to='/portfolio/#interactive_profile'></Link>          
        </div>

        <div id="intro"></div>
        <section>          
          <Intro/>
        </section>

        <div id="interactive_profile"></div>
        <section id="target">          
          <Profile/>
        </section>        

        <section>          
          <Intro/>
        </section>        

        <section>          
          <Profile/>
        </section>            


      </div>
    </Layout>
  )
}

export default PortfolioIndex