import React, { useEffect, useRef } from 'react';

import "./portfolio.scss"

const Intro = () => {

  const myElementRef = useRef();

  useEffect(() => {

    function glitch(element) {
      let count = 0

      setInterval(()=> {
        const skew = Math.random() * 20 - 10

        const top1 = Math.random() * 100
        const btm1 = Math.random() * 100
        
        const top2 = Math.random() * 100
        const btm2 = Math.random() * 100

        element.style.setProperty('--skew', `${skew}deg`)
        element.style.setProperty('--t1', `${top1}%`)
        element.style.setProperty('--b1', `${btm1}%`)
        element.style.setProperty('--t2', `${top2}%`)
        element.style.setProperty('--b2', `${btm2}%`)        
        element.style.setProperty('--scale', `1`)

        count++

        if (count % 15 === 0) {
          const bigSkew = Math.random() * 180 - 90
          element.style.setProperty('--skew', `${bigSkew}deg`)
        }
  
        if (count % 30 === 0) {
          const bigScale = 1 + Math.random() / 2
          element.style.setProperty('--scale', `${bigScale}`)
        }         

      }, 100)

    }
    
    glitch(myElementRef.current)

    return () => {
      
    }
  }, [])  
  
  return (
    <div className='portfolio-intro'>
      <h1 data-text="JbinPortfolio" ref={myElementRef}>JbinPortfolio</h1>
    </div>
  )
}

export default Intro