import React from "react";
import Image from "next/image";
import me from "../public/me.jpg";
import './about.css';


function About () {
    return (
            <div className="about-section">
                <div className="about-content">
                            {/* KIRI: Deskripsi */}
                            <div className="about-text">
                            <h1>Welcome</h1>
                            <p>
                                Hi, Im Rapi Maulana. A passionate Frontend Developer who loves crafting clean
                                and interactive web experiences. I’m always ready to build something cool.
                            </p>
                             <a
                                href="/RapiMaulana_CV.pdf"
                                download
                                className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
                                Download CV
                                </a>
                            </div>

                            {/* KANAN: Foto */}
                            <div className="about-image">
                            <Image src={me} />
                            </div>
                        </div>
                    </div>
                    

    )
}

export default About;