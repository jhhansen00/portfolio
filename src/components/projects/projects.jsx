import "./projects.css"
import connect4 from "../../img/connect 4.png"
import twitter from "../../img/Twitter.png"

function Projects () {
    return (
        <div className="p">
            <div className="p-left">
                <div className="p-left-bg"></div>
                <div className="p-left-bg2"></div>
                <div className="p-left-bg3"></div>
                <div className="p-left-wrapper">
                    <h1 className="p-title">Projects:</h1>
                    <br />
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
                </div>
            </div>
            <div className="p-right">
                <div className="p-right-bg"></div>
                <a target="_blank" href="https://jhhansen00.github.io/connect_4/"><img className="c4img" src={connect4} alt="" /></a>
                <a href="https://hardly-twitter.herokuapp.com/" target="_blank"><img className="htimg" src={twitter} alt="" /></a>

            </div>
        </div>
    )
}

export default Projects;