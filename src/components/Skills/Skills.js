import React from 'react'
import './skills.css'

import { Fade } from "react-awesome-reveal"


// import images

// const images = require.context('./assets', true);
const importAll = (target) => {
    let images = {};
    target.keys().map((item, index) => { images[item.replace('./', '')
                                                .replace('.png', '')
                                                .replace('.jpg', '')
                                                .replace('.jpeg', '')] = target(item); });
    return images;
  };
  
const fullstackimages = importAll(require.context('./assets/fullstack', false, /\.(png|jpeg|jpg)$/));
const devopsimages = importAll(require.context('./assets/devops', false, /\.(png|jpeg|jpg)$/));
const otherimages = importAll(require.context('./assets/others', false, /\.(png|jpeg|jpg)$/));



const Skills = () => {

    return (
        <div className="skills">
            <h1 className="skills--title">Skills/Tools</h1>
            <div className="skills--box">
                <h2 className="skills--subtitle"><i>Full-Stack Development</i></h2>
                <div className="skills--list">
                    {Object.keys(fullstackimages).map((lang, index) => (
                        <Fade cascade delay="30">
                            <Skill key={index} lang={lang} image={fullstackimages[lang]} />
                        </Fade>
                    ))}
                </div>

                <h2 className="skills--subtitle"><i>DevOps</i></h2>
                <div className="skills--list">
                    {Object.keys(devopsimages).map((lang, index) => (
                        <Fade>
                            <Skill key={index} lang={lang} image={devopsimages[lang]} />
                        </Fade>
                    ))}
                </div>

                <h2 className="skills--subtitle"><i>Other Languages + Tools + Libraries</i></h2>
                <div className="skills--list">
                    {Object.keys(otherimages).map((lang, index) => (
                        <Fade>
                            <Skill key={index} lang={lang} image={otherimages[lang]} />
                        </Fade>
                    ))}
                </div>
            </div>
        </div>
    )
}

const Skill = (props) => {
    
    const [hovered, setHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const containerStyle = {
        transform: hovered ? 'scale(0.95)' : 'scale(1)',
        transition: 'transform 0.3s ease-in-out'
        
    };

    return (
        <div className="skill--card">
            <img 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={containerStyle}
                src={props.image} alt="" className="skill--img" />
            <h3 className="skill--name"><i>{props.lang}</i></h3>
        </div>
    )
}


export default Skills;