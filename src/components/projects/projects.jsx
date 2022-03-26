import "./projects.css"
import connect4 from "../../img/connect 4.png"
import twitter from "../../img/Twitter.png"
import git from "../../img/GitEmployed.png"

function Projects () {
    return (
        <div className="p">
            <div className="p-left">
                <div className="p-left-bg"></div>
                <div className="p-left-bg2"></div>
                <div className="p-left-bg3"></div>
                <div className="p-left-wrapper">
                    <h1 className="p-title">Projects:</h1>
                    <div className="c4">
                        <h1 className="ptitles">Connect 4</h1>
                        <div>HTML, CSS, Javascript, Node.js</div>
                        <div className="links"><a className="link" target="_blank" href="https://jhhansen00.github.io/connect_4/">Site</a> | <a className="link" target="_blank" href="https://github.com/jhhansen00/connect_4">Github</a></div>
                    </div>
                    <div className="ht">
                        <h1 className="ptitles">Hardly Twitter</h1>
                        <div>Express.js, MongoDB, Node.js, HTML, CSS, JavaScript</div>
                        <div className="links"><a className="link" target="_blank" href="https://hardly-twitter.herokuapp.com/">Site</a> | <a className="link" target="_blank" href="https://github.com/jhhansen00/hardly-twitter">Github</a></div>

                    </div>
                    <div className="ge">
                        <h1 className="ptitles">Git Employed</h1>
                        <div>Python, Django, PostgreSql, HTML, CSS</div>
                        <div className="links"><a target="_blank" href="https://gitemployed.herokuapp.com/" className="link">Site</a> | <a href="https://github.com/Nexusmane/GitEmployed" className="link">Github</a></div>
                    </div>
                    <div className="sv">
                        <h1 className="ptitles">Study Vibes</h1>
                        <div>MongoDB, Express.js, React, Node,js</div>
                        <div className="links"><a target="_blank" href="https://study-vibes.herokuapp.com/" className="link">Site</a> | <a href="https://github.com/jhhansen00/Study-Vibes" className="link">Github</a></div>
                    </div>
                </div>
            </div>
            <div className="p-right">
                <div className="p-right-bg"></div>
                <a target="_blank" href="https://jhhansen00.github.io/connect_4/"><img className="c4img" src={connect4} alt="" /></a>
                <a target="_blank" href="https://hardly-twitter.herokuapp.com/"><img className="htimg" src={twitter} alt="" /></a>
                <a target="_blank" href="https://gitemployed.herokuapp.com/"><img className="geimg" src={git} alt="" /></a>
            </div>
        </div>
    )
}

export default Projects;