import "./Intro.css"
import Me from "../../img/me.png"

function Intro() {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-bg"></div>
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Jack Hansen</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Software Engineer</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Podcaster</div>
                            <div className="i-title-item">Tech Nerd</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        I am a graduated Software Engineer from General Assembly with experience in training,<br></br> and leadership, as well as having a large knowledge of computer hardware <br></br> (including audio and visual elements).
                    </div>
                </div>
            </div>
            <div className="i-right">
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro;