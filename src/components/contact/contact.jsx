import "./contact.css"
import res from "../../img/Resume.pdf"

function Contact() {
    return (
        <div className="contact">
            <div className="c-left">
                <h1 className="c-lgit">
                    Let's get in touch!
                </h1>
                <h1 className="right"><a className="res" href={res}>Resume</a>
                ||Email: jhhansen00@gmail.com||
                <a className="res" href="https://www.linkedin.com/in/-jackhansen/">LinkedIn</a>
                ||<a className="res" href="https://github.com/jhhansen00">Github</a></h1>
            </div>
            <div className="c-right"></div>
        </div>
    )
}

export default Contact;