import React, { useEffect, useRef, useState } from 'react';

import { navigate } from 'gatsby';

import image from './bg1.jpg'

import "./intro.scss"
const Intro = (location) => {

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  

  const [isTurnOff, setsTurnOff] = useState(false)

  const handleClick = () => {
    setsTurnOff(true)
    window.setTimeout(()=> {
      navigate('/showcase/profile');
    }, 400)
  };  

  useEffect(() => {

    function glitch(element) {
      let count = 0

      element.style.setProperty('--rgb1', `${Math.floor(Math.random() * 256)}`)
      element.style.setProperty('--rgb2', `${Math.floor(Math.random() * 256)}`)
      element.style.setProperty('--rgb3', `${Math.floor(Math.random() * 256)}`)  

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
  
        if (count % 5 === 0) {

          const rgb1 = Math.floor(Math.random() * 256)
          const rgb2 = Math.floor(Math.random() * 256)
          const rgb3 = Math.floor(Math.random() * 256)          
          element.style.setProperty('--rgb1', `${rgb1}`)
          element.style.setProperty('--rgb2', `${rgb2}`)
          element.style.setProperty('--rgb3', `${rgb3}`)     
        }         

      }, 80)

    }
    
    glitch(ref1.current)
    glitch(ref2.current)
    glitch(ref3.current)    

    return () => {
      
    }
  }, [])  
  
  const background = image
  return (
    <div>
      <div className='black-screen'></div>
      <div className={`portfolio-intro  ${isTurnOff ? 'turn-off' : ''}`} style={{ backgroundImage: `url(${background})` }}>
        
        <div className='text-area'>

          <div>
            <h1 data-text="Hi i am" ref={ref1}>Hi i am</h1>
            <h1 data-text="WebApplication" ref={ref2}>WebApplication</h1>
            <h1 data-text="Developer" ref={ref3}>Developer</h1>          
          </div>


          <div className='rainbow'>
            <button className='showcase-btn' onClick={handleClick}>
                <h2 data-text="PROFILE">PROFILE</h2>      
            </button>
          </div>     

          

        </div>


      </div>
    </div>

  )
}

export default Intro