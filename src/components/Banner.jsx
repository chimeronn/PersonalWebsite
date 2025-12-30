import './Banner.css'
import profilePhoto from "./images/profile-photo.png"
import "@fontsource/inter"

function Banner() {
    return (
        <>
            <div id="main-container">
                <img src={profilePhoto} className="profile-photo"></img>
            </div>
            <div id="text-container">
                <h1 className="profile-name">Hello, I'm <span style={{color: "#8697C4"}}>Cameron Hong.</span></h1>
                <h2 className="profile-description">Turing Scholar (CS Honors) + Statistics and Data Science @ UT Austin</h2>
            </div>
        </>
    )
}

export default Banner