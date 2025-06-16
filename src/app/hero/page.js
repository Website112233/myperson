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
   my love for coding is like a soul mate and immersed in me,"
  delay={100}
  animateBy="words"
  direction="top"
  className="text-2xl mb-8 max-w-3xl leading-relaxed"
  align-item = "center" 
/>
 <BlurText
  text="so I have a high interest in being an expert and professional in this field."
  delay={100}
  animateBy="words"
  direction="top"
  className="text-2xl mb-8 max-w-3xl leading-relaxed"
  align-item = "center" 
/>
   
    <BlurText
  text="The website I have created is built using GSAP and the Reactbits Library to make it look modern and attractive."
  delay={150}
  animateBy="words"
  direction="top"
  className="text-2xl mb-8"
/>
 <a
  href="/RapiMaulana_CV.pdf"
  download
  className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
  Download CV
  </a>
</header>

    )
}

export default Hero;