"use client";
import React from "react";

import ShinyText from "../component/ShinyText/ShinyText";
import BlurText from "../component/BlurText/BlurText";

function Hero () {
    return (
  <header className="hero_header ">
   
              <h1>Rapi Maulana</h1>
              <ShinyText text="As Frontend Developer" disabled={false} speed={4} className='custom-class' />
              <BlurText
              text="I am Rapi Maulana as a front end developer, I have a high interest in this field,
              my love for coding is like a soul mate and immersed in me,so I have a high interest in being an expert and professional in this field."
              delay={100}
              animateBy="words"
              direction="top"
              className="blurtext"
              align-item = "center" 
              />
            
              <BlurText
              text="The website I have created is built using GSAP and the Reactbits Library to make it look modern and attractive."
              delay={150}
              animateBy="words"
              direction="top"
              className="blurtext"
            />
          </header>

    )
}

export default Hero;