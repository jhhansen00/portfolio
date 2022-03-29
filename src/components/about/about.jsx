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
                    <div className="a-about-wrapper">
                        <div className="a-about">I am a Full-Stack Software Engineer based out of the Midwest. <br />
                        Late 2021 after building my own pc and reinvigorating my passion for technology, <br /> 
                        I quit my job and dove head first into software development. I graduated from General <br />
                        Assemblies' 450+ hour software engineering immersive bootcamp and haven't looked back. <br />
                        Although I am new to the field I'm a quick learner and highly driven, with a strong <br />
                        sense of responsibility and pride in my own work. Outside of software <br />
                        I am super passionate about music; so much so I have a podcast with my dad, brother, <br /> and friend of mine where we talk 
                        and share music.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;