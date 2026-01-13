import './MainPage.css'
import Banner from './components/Banner.jsx'
import Project from './components/Project.jsx'
import Sinophine from './components/Sinophine.jsx'
import MusicLocker from './components/MusicLocker.jsx'
import PopGenetics from './components/PopGenetics.jsx'
import ParticleFilter from './components/ParticleFilter.jsx'
import LogisticRegression from './components/LogisticRegression.jsx'
import Word2Vec from './components/Word2Vec.jsx'
import SalesForecast from './components/SalesForecast.jsx'
import PokeBot from './components/PokeBot.jsx'
import {FaLinkedin, FaGithub, FaEnvelope, FaFile, FaFolderOpen, FaMedium} from 'react-icons/fa'


function MainPage() {
    return (
        <>
            <div id="main-page-main-container">
                <Banner />
            </div>
            <div id="main-page-content-container">
                <div id="col1">
                    <div id="quick-links-container">
                        <h3 className="header">Quick Links</h3>
                        <a href="https://drive.google.com/file/d/1zSptJGkhHfwbE9eY9DON-4wp-rq6LD0f/view?usp=sharing" className="quick-link">
                            <FaFile size={15} color="#000000"></FaFile>
                            <span className="quick-link-text">My Resume</span>
                        </a>
                        <a href="mailto:cameronhong@utexas.edu" className="quick-link" id="email-link">
                            <FaEnvelope size={15} color="#000000"></FaEnvelope>
                            <span className="quick-link-text default-text">Email</span>
                            <span className="quick-link-text hover-text">cameronhong@utexas.edu</span>
                        </a>
                        <a href="https://www.linkedin.com/in/cameron-hong-41751232a/" className="quick-link">
                            <FaLinkedin size={15} color="#0077B5"></FaLinkedin>
                            <span className="quick-link-text">LinkedIn</span>
                        </a>
                        <a href="https://github.com/chimeronn" className="quick-link">
                            <FaGithub size={15} color="#000000"></FaGithub>
                            <span className="quick-link-text">GitHub</span>
                        </a>
                        <a href="https://medium.com/@camerhong22" className="quick-link">
                            <FaMedium size={15} color="#000000"></FaMedium>
                            <span className="quick-link-text">Medium</span>
                        </a>
                    </div>
                    <div id="research-interests-container">
                        <h3 className="header">Core Skills</h3>
                        <div id="research-interests-labels-container">
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Java</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Python</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>C / C++</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>JavaScript</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>HTML / CSS</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>SQL (PostgreSQL)</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>REST / JSON</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Pandas</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>NumPy</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>TensorFlow</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>SKLearn</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Matplotlib</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>OpenCV</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Electron</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Git</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>AWS</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>GCP</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>React</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Flask</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>FastAPI</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Docker</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Machine Learning</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Statistical Modeling</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Neural Networks</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Logistic Regression</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>HMMs</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>LLMs</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>RAG</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Communication</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Teamwork</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Problem Solving</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Creativity</span>
                        </div>
                    </div>
                </div>
                <div id="col2" className="col">
                    <div id="col2-header">
                        <FaFolderOpen size={20} color="#000000"></FaFolderOpen>
                        <span className="col2-text">Portfolio</span>
                    </div>
                    <div id="projects-container">
                        <div id="project1-container">
                            <Project></Project>
                        </div>
                        <div></div>
                        <div id="project2-container">
                            <Sinophine></Sinophine>
                        </div>
                        <div id="project1-container">
                            <MusicLocker></MusicLocker>
                        </div>
                        <div></div>
                        <div id="project2-container">
                            <PopGenetics></PopGenetics>
                        </div>
                        <div id="project1-container">
                            <ParticleFilter></ParticleFilter>
                        </div>
                        <div></div>
                        <div id="project2-container">
                            <LogisticRegression></LogisticRegression>
                        </div>
                        <div id="project1-container">
                            <Word2Vec></Word2Vec>
                        </div>
                        <div></div>
                        <div id="project2-container">
                            <SalesForecast></SalesForecast>
                        </div>
                        <div id="project1-container">
                            <PokeBot></PokeBot>
                        </div>
                    </div>
                </div>
                <div id="col3">
                    <div id="about-me-container">
                        <h3 className="header">About Me</h3>
                        <p className="about-me-text">
                            Highly driven Computer Science student seeking to obtain an intern position in Software Development who is ready to apply the theoretical and practical knowledge gained through experience, coursework and projects to contribute to your company’s success while also learning new technologies in the ever-evolving field of CS and growing as a professional.
                        </p>
                    </div>
                    <div id="research-interests-container">
                        <h3 className="header">Research Interests</h3>
                        <div id="research-interests-labels-container">
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Machine Learning / Artificial Intelligence</span>
                            <br></br>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Computational Biology</span>
                            <br></br>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Natural Language Processing</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Robotics</span>
                            <br></br>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Optimization Problems</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Autonomous Navigation</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Computer Vision</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Classification Tasks</span>
                            <span className="interest-label" style={{backgroundColor: "lightgray"}}>Game Theory</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage