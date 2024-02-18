import React, { useEffect, useRef, useState } from 'react';

import { navigate } from 'gatsby';

import image from '../images/background/bg2.jpg'

import "./intro.scss"
const Intro = (location) => {

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  const [isTurnOff, setsTurnOff] = useState(false)

  const handleClick = () => {
    setsTurnOff(true)
    window.setTimeout(()=> {
      navigate('/showcase');
    }, 400)
  };  

  useEffect(() => {

    function glitch(element) {
      let count = 0

      setInterval(()=> {
        const skew = Math.random() * 20 - 10


        element.style.setProperty('--skew', `${skew}deg`)    
        element.style.setProperty('--scale', `1`)

        count++

        if (count % 20 === 0) {
          const bigSkew = Math.random() * 180 - 90
          element.style.setProperty('--skew', `${bigSkew}deg`)
          const bigScale = 1 + Math.random() / 2
          element.style.setProperty('--scale', `${bigScale}`)              
 
        }
  
        if (count % 30 === 0) {
  
        }         

      }, 80)

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
    <div className={`portfolio-intro ${isTurnOff ? 'turn-off' : ''}`} style={{ backgroundImage: `url(${background})` }}>
      
      <div className='text-area'>

        <div>
          <h1 data-text="Hi i am" ref={ref1}>Hi i am</h1>
          <h1 data-text="WebApplication" ref={ref2}>WebApplication</h1>
          <h1 data-text="Developer" ref={ref3}>Developer</h1>
          <h1 data-text="Jbin" ref={ref4}>Jbin</h1>
        </div>


        <div className='rainbow'>
           <button className='showcase-btn' onClick={handleClick}>
              <h2 data-text="Showcase">Showcase</h2>      
           </button>
        </div>     

        

      </div>


    </div>
  )
}

export default Intro