import "./about.css"

function About() {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-l-bg"></div>
                <div className="a-l-bg2"></div>
                <div className="a-left-wrapper">
                    <h1 className="a-languages">Languages:</h1>
                    <div className="a-lang-wrapper">
                        <div className="a-lang">HTML</div>
                        <div className="a-lang">CSS</div>
                        <div className="a-lang">JavaScript</div>
                        <div className="a-lang">Python</div>
                        <div className="a-lang">TypeScript</div>
                    </div>
                </div>
            </div>
            <div className="a-right">
                <div className="a-r-bg"></div>
                <div className="a-right-wrapper">
                    <h1 className="about">About Me:</h1>
                    <div className="a-about-wrapper"></div>
                        <div className="a-about">I am a Full-Stack Software Engineer based out of the Midwest. <br />
                        
                        </div>
                </div>
            </div>
        </div>
    )
}

export default About;