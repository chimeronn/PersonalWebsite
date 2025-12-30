import './Project.css'
import {FaGlobe} from 'react-icons/fa'
import musicLockerPhoto from "./images/musiclocker.png"

function MusicLocker() {
    return (
        <>
            <a id="project-link" href="https://musiclocker.site/">
                <div id="project-main-container">
                    <div id="photo-container" style={{ backgroundImage: `url(${musicLockerPhoto})` }}>

                    </div>
                    <div id="project-text-container">
                        <div id="project-title-container">
                            <div id="icon-div">
                                <FaGlobe className="title-icon" size={20}></FaGlobe>
                            </div>
                            <div className="project-title">
                                <h4>musiclocker.site</h4>
                            </div>
                        </div>
                        <div id="project-skills-container">
                            <span className="skill-label" style={{backgroundColor: "#3B9797"}}>Python</span>
                            <span className="skill-label" style={{backgroundColor: "#AFBE8F"}}>Flask</span>
                            <span className="skill-label" style={{backgroundColor: "#45062E"}}>React</span>
                            <span className="skill-label" style={{backgroundColor: "#A20021"}}>PostgreSQL</span>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}

export default MusicLocker