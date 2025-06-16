"use client"

import React from "react";
import Hero from "./hero/page";
import ScrollSection from "./scroll/page";
import Footer from "./footer/page";
import About from "./about/page";
import SplashCursor from "./component/SplashCursor/SplashCursor";

export default function Home() {
  return (
    <>
       <Hero/>
       <About />
       <ScrollSection/>
       <div style={{ marginTop: "auto" }}>
        <Footer />
      </div>
      <SplashCursor /> 
    </>
  );
}
