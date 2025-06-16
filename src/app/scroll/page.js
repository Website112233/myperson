 'use client';
import React, {useRef,useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import myImage from "../public/magen.png";
import myImage2 from "../public/siak.png";
import myImage3 from "../public/pic1.jpg";
import myImage4 from "../public/pic2.jpg";
import myImage5 from "../public/pic3.jpg";


function ScrollSection () {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const pin = gsap.fromTo(sectionRef.current,{
            translateX : 0
        }, {
            translateX:"-400vw",
            ease : "none",
            duration : 1,
            scrollTrigger : {
                trigger : triggerRef.current,
                start : "top top",
                end : "2000 top",
                scrub : 0.6,
                pin : true
            }
        })

        return () => {
            pin.kill()
        }
    },[]);

    return (
        <section className="scroll-section-outer">
            <h1>My Project</h1>
            <div ref={triggerRef}>
                <div ref={sectionRef} className="scroll-section-inner">
                        <div className="scroll-section">
                            <a href="https://magenta.indramayukab.go.id/"> <Image src={myImage} alt="project" width={600} height={400} /></a>
                        </div>
                        <div className="scroll-section ">
                           <a href="https://siakaesmi.majalio.com/"> <Image src={myImage2} alt="project2" width={600} height={400} /></a>
                        </div>
                        <div className="scroll-section ">
                           <h1>push again here I want to share my hobby!!!</h1>
                        </div>
                        <div className="scroll-section ">
                        <Image src={myImage3} alt="project2" width={600} height={400} />
                        </div>
                        <div className="scroll-section ">
                        <Image src={myImage4} alt="project2" width={600} height={400} />
                        </div>
                        <div className="scroll-section ">
                        <Image src={myImage5} alt="project2" width={600} height={400} />
                        </div>
                </div>
            </div>
        </section>

    )
}

export default ScrollSection;