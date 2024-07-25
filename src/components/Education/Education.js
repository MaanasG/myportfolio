import React from "react"
import './education.css'

//import images
import umdlogo from "./assets/umdlogo.png"
import brhslogo from "./assets/brhslogo.png"

const Education = () => {

    return (
        <div>
            <h1 className="education--title">Education</h1>
            <div className="schools">
                <School 
                    school="University of Maryland: College Park"
                    grad="Expected Graduation: June 2026"
                    desc="B.S. in Computer Science, Minor in Finance"
                    coursework="Advanced Data Structures, Multivariable Calculus, Discrete Mathematics, Microeconomics"
                    activities="AWS Club, Cloud Computing Club, UMD Parliamentary Debate Team"
                    image={umdlogo}
                />

                <School 
                    school="Bridgewater-Raritan High School"
                    grad="Graduated: June 2023"
                    desc="GPA: 4.4"
                    coursework=": Multivariable Calculus, Differential Equations, AP Calculus-Based Physics, Rutgers University’s 
                                    CS112: Data Structures, AP Calculus BC, AP Computer Science A, AP Macroeconomics"
                    activities=" Mu Alpha Theta (National Math Honors Society) Vice President, Varsity Parliamentary Debate 
                                    Captain, Robotics Team 303 Lead Webmaster, French Honors Society Inductee, National Honors Society 
                                    Inductee"
                    image={brhslogo}
                />
            </div>
        </div>
    )

}

const School = (props) => {
    //school, grad, desc, coursework, activities, image
    
    return (
        <div className="schoolcontainer">
            <img src={props.image} alt="" className="container--img" />
            <div className="container--abstract">
                <h2 className="school--school">{props.school}</h2>
                <h3 className="school--grad">{props.grad}</h3>
                <h4 className="school--desc"><i>{props.desc}</i></h4>
                <h5 className="school--coursework"><b>Coursework: </b>{props.coursework}</h5>
                <h5 className="school--activities"><b>Activities: </b>{props.activities}</h5>
            </div>
        </div>
    )
}

export default Education;