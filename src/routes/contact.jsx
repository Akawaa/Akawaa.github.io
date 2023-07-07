import React from "react";
import { Link } from "react-router-dom";


export default function Contact() {
    return (
        <div>
        <div className="header">
            <h4>
                <Link to ="/">
                    <button>Home</button>
                </Link>
                <a href = "/akawa resume.pdf" target = "_blank">
                    <button>Resume</button>
                </a>
                <Link to ="/Contact">
                    <button>Contact</button>
                </Link>
            </h4>
        </div>
        <div className="contact-header">
            <h1>Contacts</h1>
        </div>

        <div className="Contacts">
            <div className="contact">
                <a href = "mailto:adriankawa054@gmail.com" target = "_blank" className="contact-link">
                    <div className="contact-module">
                        <img src ="email.png" alt="icon" className="contact-image"></img>
                        <div className="contact-info">
                            <h1>
                                E-Mail
                            </h1>
                            <p>adriankawa054@gmail.com</p>
                        </div>
                    </div>
                </a>

            </div>
            <div className="contact">
                <a href = "https://github.com/Akawaa" target = "_blank" className="contact-link">
                    <div className="contact-module">
                        <img src ="github.png" alt="icon" className="contact-image"></img>
                        <div className="contact-info">
                            <h1>
                                GitHub
                            </h1>
                            <p>github.com/Akawaa</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="contact">
                <a href = "https://www.linkedin.com/in/adrian-kawa-73a383214/" target = "_blank" className="contact-link">
                    <div className="contact-module">
                        <img src ="linkedin.png" alt="icon" className="contact-image"></img>
                        <div className="contact-info">
                            <h1>
                                Linkedin
                            </h1>
                            <p>in/adriankawa</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="contact">
                <a href = "https://twitter.com/AkawaOW" target = "_blank" className="contact-link">
                    <div className="contact-module">
                        <img src ="twitter.png" alt="icon" className="contact-image"></img>
                        <div className="contact-info">
                            <h1>
                                Twitter
                            </h1>
                            <p>AkawaOW</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        </div>
    )
}