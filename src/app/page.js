"use client"

import React from "react";
import Hero from "./hero/page";
import ScrollSection from "./scroll/page";
import ScrollSection2 from "./scroll2/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <>
       <Hero/>
       <ScrollSection/>
       <ScrollSection2/>
       <div style={{ marginTop: "auto" }}>
        <Footer />
      </div>
    </>
  );
}
