import './Project.css'
import {FaRobot} from 'react-icons/fa'
import particleFilterPhoto from "./images/PFGraph1.png"

function ParticleFilter() {
    return (
        <>
            <a id="project-link" href="http://medium.com/@camerhong22/easy-localization-the-particle-filter-650bd78f9bf0">
                <div id="project-main-container">
                    <div id="photo-container" style={{ backgroundImage: `url(${particleFilterPhoto})` }}>

                    </div>
                    <div id="project-text-container">
                        <div id="project-title-container">
                            <div id="icon-div">
                                <FaRobot className="title-icon" size={20}></FaRobot>
                            </div>
                            <div className="project-title">
                                <h4>Easy Localization: The Particle Filter</h4>
                            </div>
                        </div>
                        <div id="project-skills-container">
                            <span className="skill-label" style={{backgroundColor: "#3B9797"}}>Python</span>
                            <span className="skill-label" style={{backgroundColor: "#3772FF"}}>Stochastic Processes</span>
                            <span className="skill-label" style={{backgroundColor: "#040F0F"}}>Robotics</span>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}

export default ParticleFilter