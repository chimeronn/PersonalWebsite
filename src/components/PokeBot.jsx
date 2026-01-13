import './Project.css'
import {FaGamepad} from 'react-icons/fa'
import pokemonBattlePhoto from "./images/PokemonBattle.png"

function PokeBot() {
    return (
        <>
            <a id="project-link" href="https://www.youtube.com/watch?v=c67MlUNdd5g">
                <div id="project-main-container">
                    <div id="photo-container" style={{ backgroundImage: `url(${pokemonBattlePhoto})` }}>

                    </div>
                    <div id="project-text-container">
                        <div id="project-title-container">
                            <div id="icon-div">
                                <FaGamepad className="title-icon" size={20}></FaGamepad>
                            </div>
                            <div className="project-title">
                                <h4>Creating an Agent that Plays Pokemon</h4>
                            </div>
                        </div>
                        <div id="project-skills-container">
                            <span className="skill-label" style={{backgroundColor: "#3B9797"}}>Python</span>
                            <span className="skill-label" style={{backgroundColor: "#E06B80"}}>Machine Learning</span>
                            <span className="skill-label" style={{backgroundColor: "#32a852"}}>Game Theory</span>  
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}

export default PokeBot