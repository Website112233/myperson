import React, {useRef,useEffect} from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import pic1 from "../public/pic1.jpg";
import pic2 from "../public/pic2.jpg";

function ScrollSection2 () {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(sectionRef.current,{
            translateX : 0
        }, {
            translateX:"-300vw",
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
    },{});

    return (
        <section className="scroll-section-outer">
            <h1>My Hobby</h1>
            <div ref={triggerRef}>
                <div ref={sectionRef} className="scroll-section-inner">
                        <div className="scroll-section">
                        <Image src={pic1} alt="project" width={800} height={600} />
                        </div>
                        <div className="scroll-section ">
                        <Image src={pic2} alt="project2" width={800} height={600} />
                        </div>
                        <div className="scroll-section ">
                       <p>for collaboration on projects, please contact us below.</p>
                        </div>
                </div>
            </div>
        </section>

    )
}

export default ScrollSection2;