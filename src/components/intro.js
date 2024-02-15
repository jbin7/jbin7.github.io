import React, { useEffect, useRef } from 'react';
import image from '../images/bg1.jpg'

import "./intro.scss"
const Intro = () => {

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

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
    
    glitch(ref1.current)
    glitch(ref2.current)
    glitch(ref3.current)
    glitch(ref4.current)

    return () => {
      
    }
  }, [])  
  
  const background = image
  return (
    <div className='portfolio-intro' style={{ backgroundImage: `url(${background})` }}>
      
      <div className='text-area'>
        <h1 data-text="Hi i am" ref={ref1}>Hi i am</h1>
        <h1 data-text="WebApplication" ref={ref2}>WebApplication</h1>
        <h1 data-text="Developer" ref={ref3}>Developer</h1>
        <h1 data-text="Jbin" ref={ref4}>Jbin</h1>
      </div>
    </div>
  )
}

export default Intro