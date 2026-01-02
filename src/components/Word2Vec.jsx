import './Project.css'
import {FaBook} from 'react-icons/fa'
import embeddingPhoto from "./images/wordembedding.png"

function Word2Vec() {
    return (
        <>
            <a id="project-link" href="https://medium.com/@camerhong22/creating-a-simple-word-embedding-model-with-continuous-bag-of-words-0bf37a04f839">
                <div id="project-main-container">
                    <div id="photo-container" style={{ backgroundImage: `url(${embeddingPhoto})` }}>

                    </div>
                    <div id="project-text-container">
                        <div id="project-title-container">
                            <div id="icon-div">
                                <FaBook className="title-icon" size={20}></FaBook>
                            </div>
                            <div className="project-title">
                                <h4>Creating a Simple Word Embedding Model with Continuous Bag of Words</h4>
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

export default Word2Vec