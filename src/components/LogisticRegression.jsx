import './Project.css'
import {FaCalculator} from 'react-icons/fa'
import logisticRegressionPhoto from "./images/logisticRegression.png"

function LogisticRegression() {
    return (
        <>
            <a id="project-link" href="https://drive.google.com/file/d/1HCeJ9RHtX6u7sspVgtQASB5FFhOThOxl/view">
                <div id="project-main-container">
                    <div id="photo-container" style={{ backgroundImage: `url(${logisticRegressionPhoto})` }}>

                    </div>
                    <div id="project-text-container">
                        <div id="project-title-container">
                            <div id="icon-div">
                                <FaCalculator className="title-icon" size={20}></FaCalculator>
                            </div>
                            <div className="project-title">
                                <h4>Development of a Fast Training Algorithm for Logistic Regression</h4>
                            </div>
                        </div>
                        <div id="project-skills-container">
                            <span className="skill-label" style={{backgroundColor: "#3B9797"}}>Python</span>
                            <span className="skill-label" style={{backgroundColor: "#E06B80"}}>Machine Learning</span>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}

export default LogisticRegression