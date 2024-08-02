import React from 'react'
import Landing from '../components/Landing/Landing.js'
import Experience from "../components/Experience/Experience.js"
import Divider from "../components/Divider/Divider.js"
import AboutMe from "../components/About Me/AboutMe.js"
import Education from "../components/Education/Education.js"
import Skills from "../components/Skills/Skills.js"
import ContactMe from "../components/Contact/ContactMe.js"
import Footer from "../components/Footer/Footer.js"

import { Fade, Slide, Zoom, JackInTheBox } from "react-awesome-reveal";

export default function Main() {
    return(
        <div>
            <Fade delay="20">
                <Landing /> 
            </Fade>
            <Divider />
            <Slide triggerOnce>
                <Experience />
            </Slide>
            <Divider />
            <Fade delay="20">
                <AboutMe />
            </Fade>
            <Divider />
            <Zoom delay="20">
                <Education />
            </Zoom>
            <Divider />
            <Fade delay="20">
                <Skills />
            </Fade>
            <Divider />
            <Fade delay="20">
                <ContactMe />
            </Fade>
            <Divider />
            <JackInTheBox delay="20">
                <Footer />
            </JackInTheBox>
        </div>
    )
}