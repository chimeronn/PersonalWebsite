import './Project.css'
import {FaMoneyBill} from 'react-icons/fa'
import salesPhoto from "./images/salesforecasting.png"

function SalesForecast() {
    return (
        <>
            <a id="project-link" href="https://www.kaggle.com/code/camerhong22/sales-forecast-using-xgboost-prophet-and-lstm">
                <div id="project-main-container">
                    <div id="photo-container" style={{ backgroundImage: `url(${salesPhoto})` }}>

                    </div>
                    <div id="project-text-container">
                        <div id="project-title-container">
                            <div id="icon-div">
                                <FaMoneyBill className="title-icon" size={20}></FaMoneyBill>
                            </div>
                            <div className="project-title">
                                <h4>Sales forecast using XGBoost, Prophet, and LSTM</h4>
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

export default SalesForecast