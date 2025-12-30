import './Project.css'
import {FaDna} from 'react-icons/fa'
import geneticsPhoto from "./images/genetics.jpg"

function PopGenetics() {
    return (
        <>
            <a id="project-link" href="https://drive.google.com/file/d/1J458V7kUZdm19HJZJk3WArgktdpr8xes/view?usp=sharing">
                <div id="project-main-container">
                    <div id="photo-container" style={{ backgroundImage: `url(${geneticsPhoto})` }}>

                    </div>
                    <div id="project-text-container">
                        <div id="project-title-container">
                            <div id="icon-div">
                                <FaDna className="title-icon" size={20}></FaDna>
                            </div>
                            <div className="project-title">
                                <h4>Predicting Crossover Rate and Non-allelic Gene Conversion Rate from N Haplotypes</h4>
                            </div>
                        </div>
                        <div id="project-skills-container">
                            <span className="skill-label" style={{backgroundColor: "#3B9797"}}>Python</span>
                            <span className="skill-label" style={{backgroundColor: "#E06B80"}}>Machine Learning</span>
                            <br></br>
                            <span className="skill-label" style={{backgroundColor: "#3772FF"}}>Stochastic Processes</span>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}

export default PopGenetics