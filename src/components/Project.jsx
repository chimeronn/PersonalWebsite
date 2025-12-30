import './Project.css'
import {FaChartLine} from 'react-icons/fa'
import stocksPhoto from "./images/stocks.jpg"

function Project() {
    return (
        <>
            <a id="project-link" href="https://medium.com/@camerhong22/creating-a-trading-bot-with-alpaca-and-fastapi-4c0d9aa83099">
                <div id="project-main-container">
                    <div id="photo-container" style={{ backgroundImage: `url(${stocksPhoto})` }}>

                    </div>
                    <div id="project-text-container">
                        <div id="project-title-container">
                            <div id="icon-div">
                                <FaChartLine className="title-icon" size={20}></FaChartLine>
                            </div>
                            <div className="project-title">
                                <h4>Creating a Trading Bot with Alpaca and FastAPI</h4>
                            </div>
                        </div>
                        <div id="project-skills-container">
                            <span className="skill-label" style={{backgroundColor: "#3B9797"}}>Python</span>
                            <span className="skill-label" style={{backgroundColor: "#7132CA"}}>FastAPI</span>
                            <span className="skill-label" style={{backgroundColor: "#E06B80"}}>Machine Learning</span>                        
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}

export default Project