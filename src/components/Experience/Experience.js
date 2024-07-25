import React from 'react'
import './experience.css'

// import images
import icodeimg from "./assets/icodefront.png"
import emedeventsimg from "./assets/emedeventsfront.png"
import team303img from "./assets/team303front.png"
import mainsimg from "./assets/1mainsfront.png"
import portfolioimg from "./assets/portfoliofront.png"
import pureyouthimg from "./assets/pureyouthfront.png"

const Experience = () => {
    
    return(
        <div>
            <h1 className="jobstitle">Work/Project Experience</h1>
            <div className="jobs">
                <JobCard 
                    title="iCode Franchise"
                    position="Director of Operations"
                    period="Feb. 2022 — Present"
                    description="Managing instructors and developing core curriculum for iCode School Franchise;
                                    former lead instructor for frontend web development, machine learning, data structures
                                    and circutry-related courses."
                    vidsrc={icodeimg}
                    linkto="company website placeholder"
                    langs={["Python", 
                        "Java", 
                        "HTML/CSS", 
                        "Javascript", 
                        "Machine Learning",
                        "Wireframe"
                    ]}
                />

                <JobCard 
                    title="eMedEvents"
                    position="Front-End Development Intern"
                    period="June 2021 – August 2021"
                    description="Drafted, developed, and pitched various components of eMedEvents website using HTML and CSS, and Javascript
                                    alongside senior advertising/development team."
                    vidsrc={emedeventsimg}
                    linkto="company website placeholder"
                    langs={["Figma", 
                        "HTML", 
                        "CSS", 
                        "Javascript", 
                    ]}
                />
                <JobCard 
                    title="Team 303"
                    position="Lead Webmaster"
                    period="Sept. 2021 – June 2023"
                    description="Managed migration and maintenance of 5 team domains; developed several 
                                    components of each site; trained underclassmen in HTML/CSS web development;
                                    developed drivetrain and claw automation in Java using FRC libraries for competition use; 
                                    trained/certified in industrial grade fabrication equipment."
                    vidsrc={team303img}
                    linkto="company website placeholder"
                    langs={["Java", 
                        "HTML/CSS", 
                        "Javascript", 
                        "Machine Learning",
                        "Wireframe"
                    ]}
                />
                <JobCard 
                    title="Freelance Music Production"
                    position="Web Development Project"
                    period="July. 2024 — Present"
                    description="Developing virtual storefront for music production business servicing 2000+ customers;
                                        have amassed 4+ million streams across all platforms."
                    vidsrc={mainsimg}
                    linkto="company website placeholder"
                    langs={["Java", 
                        "HTML/CSS", 
                        "Javascript", 
                        "React",
                        "Figma"
                    ]}
                />

                <JobCard 
                    title="Personal CS Portfolio"
                    position="Web Development Project"
                    period="July. 2024 — Present"
                    description="Developing personal portfolio site dedicated to showcasing computer science projects, explaining 
                                    work experience, sharing personal experience, and networking."
                    vidsrc={portfolioimg}
                    linkto="company website placeholder"
                    langs={["HTML/CSS", 
                        "Javascript", 
                        "React",
                        "Figma"
                    ]}
                />
                <JobCard    
                    title="PURE Youth"
                    position="Webpage Designer/Curator"
                    period="July. 2019 — Oct. 2019"
                    description="Designed various features, such as language toggles and selectible social media hyperlinks,
                                    to improve UX/accessibility; designed and presented graphics to illustrate growing access to 
                                    education in 3rd world countries provided by PURE"
                    vidsrc={pureyouthimg}
                    linkto="company website placeholder"
                    langs={["Wireframe", 
                        "Adobe Photoshop"
                    ]}
                />


            </div>
        </div>
    )
}

const JobCard = (props) => {
    // [title, position, description, vidsrc, linkto, langs] 


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
        // <img />

        

        <div className="job">
            <div className="job--vis">
                <img 
                    src={props.vidsrc} alt=""
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={containerStyle}
                    />
            </div>
            <div className="jobs--desc">
                <h2 className="jobs--title">{props.title}</h2>
                <h3 className="jobs--position">{props.position}</h3>
                <p className="jobs--desctext"><i>{props.period}</i></p>
                <p className="jobs--desctext"><i>{props.description}</i></p>
            </div>
            <div className="jobs--toolslist">
                <Tools 
                    toolsUsed={props.langs}
                />
            </div>
        </div>
    )

}

const Tools = (props) => {
    return (
        props.toolsUsed.map(item => (
            <h4 className="job--tool">{item}</h4>
        ))
    )
}

export default Experience;
