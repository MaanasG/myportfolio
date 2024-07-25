import React from 'react'
import landingphoto from './assets/4hphoto.jpg'
import './landing.css'

export default function Landing() {
    return(
        <div 
            className="landing"
        >
            <img 
                src={landingphoto} 
                alt=""
                className="landing--left"/>
            
            <div className="landing--right">
                <h1 className="landing--header">Hi!</h1>
                <h3 className="landing--myname">My name is Maanas Gopi.</h3>    
                
                <h4 className="landing--abstract">I'm an undergraduate student at 
                    the University of Maryland, currently
                    studying computer science and finance.</h4>
                <div className="landing--buttongrid">
                    <button className="landing--button"
                        onClick={() => window.location.href = 'mailto:gopimaanas@example.com'}>
                            Email</button>
                    <a href="https://drive.google.com/file/d/1f6uhB8LzavR7SKcLLyzlZwGARSHyzK36/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                        <button className="landing--button">Resume</button>
                    </a>
                    <a href="https://www.linkedin.com/in/maanas-gopi" target="_blank" rel="noopener noreferrer">
                        <button className="landing--button">LinkedIn</button>
                    </a>
                    <a href="https://github.com/MaanasG" target="_blank" rel="noopener noreferrer">
                        <button className="landing--button">GitHub</button>
                    </a>
                </div>
            </div>
        </div>
    )
}