import React from 'react'
import coffeepic from './assets/coffeepic.jpg'
import './aboutme.css'

export default function AboutMe() {
    return(
        <div 
            className="aboutme"
        >
            
            <div className="aboutme--left">
                <h1 className="aboutme--header">...who am I?</h1>
                <h3 className="aboutme--subheader"><i>...other than a passionate CS + Fin student based in Raritan, NJ!</i></h3>
                
                <h4 className="aboutme--abstract">Outside of building CS projects and websites, I enjoy playing basketball, photography, trying
                    new foods, and traveling! I've also been running a music production business for the
                    past 3 years; if you're interested, give my music a listen!
                </h4>
                {/* <div className="landing--buttongrid">
                    <button className="landing--button">Email</button>
                    <button className="landing--button">Resume</button>
                    <button className="landing--button">LinkedIn</button>
                    <button className="landing--button">Github</button>
                </div> */}
            </div>
            <img 
                src={coffeepic} 
                alt=""
                className="aboutme--right"
            />
        </div>
    )
}