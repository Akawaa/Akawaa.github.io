import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
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
            <header className="App-header">
            <div className="info">
            <h1>
                Adrian Kawa
            </h1>
            <p>
            Welcome to my website! I'm a recent graduate from Harrisburg University, holding a Bachelor's degree in Computer Science. With a background as a former professional esports player in Overwatch, I bring a unique blend of competitive gaming experience and technical expertise. My true passion lies in game development and software development, where I channel my creativity and skills to bring engaging experiences to life.
            </p>
            
            <div className="skills">
                <ul>
                    <li>Python</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>C#</li>
                    <li>C++</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>C</li>
                    <li>Unity</li>
                    <li>Android</li>
                    <li>React</li>
                    <li>MySQL</li>
                    <li>WebGL</li>
                    <li>Prolog</li>
                    <li>Blender</li>
                </ul>
                </div>
            </div>
            <img src = "akawagrad.jpg" alt ="personal-img"  className="personal-img"></img>
            </header>
            <div className="main-content">
                
            <div className="projects">
                
                <div className='project'>
                
                    <img src ="huicon.png" alt="icon" className="project-icon"></img>
                    <Link to ="/softwaredev">
                    <div className="project-info">
                        <h2>
                            Software Developer Intern
                        </h2>
                        <p>
                            Software Developer Intern at Harrisburg University
                        </p>
                        <ul className="project-tags">
                            <li>Python</li>
                            <li>Software Development</li>
                            
                        </ul>
                    </div>
                </Link>
                </div>
                
                <div className='project'>
                
                <img src ="hustorm.png" alt="icon" className="project-icon"></img>
                <Link to = "/esports">
                <div className="project-info">
                        <h2>
                            Professional Esports Player
                        </h2>
                        <p>
                            Esports Player for XL2 Academy and HU Storm
                        </p>
                        <ul className="project-tags">
                            <li>Communication</li>
                            <li>Leadership</li>
                            <li>Teamwork</li>
                            <li>High Stress Environment</li>
                            <li>2020 National Collegiate Champion</li>
                        </ul>
                    </div>
                    </Link>
                </div>

                <div className='project'>
                <img src ="youhat.png" alt="icon" className="project-icon"></img>
                <Link to = "/kickochet">
                <div className="project-info">
                        <h2>
                            Kick-ochet
                        </h2>
                        <p>
                            A Browser Shooter Game
                        </p>
                        <ul className="project-tags">
                            <li>Unity</li>
                            <li>C#</li>
                            <li>Teamwork</li>
                            <li>Blender</li>
                            <li>Live Demo</li>
                        </ul>
                    </div>
                </Link>
                </div>
                
                <div className='project'>        
                <img src ="codingrat.png" alt="icon" className="project-icon"></img>
                <Link to = "/codingrat">
                <div className="project-info">
                        <h2>
                            Coding Rat
                        </h2>
                        <p>
                            Game Creation with Unity
                        </p>
                        <ul className="project-tags">
                            <li>Unity</li>
                            <li>C#</li>
                            <li>Blender</li>
                            <li>Serious Games</li>
                            <li>Full Research Report</li>
                        </ul>
                    </div>
                </Link>
                </div>
                

                
                <div className='project'>
                <img src ="queen.png" alt="icon" className="project-icon"></img>
                <Link to = "/queenproblem">
                <div className="project-info">
                        <h2>
                            N Queen's Problem
                        </h2>
                        <p>
                            Visualize N Queen's Problem using Unity
                        </p>
                        <ul className="project-tags">
                            <li>Unity</li>
                            <li>C#</li>
                            <li>Backtracking</li>
                            <li>Algorithm</li>
                            <li>Live Demo</li>
                        </ul>
                    </div>
                    </Link>
                </div>

                

                
                <div className='project'>
                <img src ="snake.png" alt="icon" className="project-icon"></img>
                <Link to = "/snakeai">
                <div className="project-info">
                        <h2>
                            Snake AI
                        </h2>
                        <p>
                            Snake AI using Reinforcement Learning
                        </p>
                        <ul className="project-tags">
                            <li>Python</li>
                            <li>PyTorch</li>
                            <li>Reinforcement Learning</li>
                            <li>Machine Learning</li>
                            <li>Video Display</li>
                            <li>Full Research Report</li>
                        </ul>
                    </div>
                    </Link>
                </div>
                

                
                <div className='project'> 
                <img src ="website.png" alt="icon" className="project-icon"></img>
                <Link to = "/websites">
                <div className="project-info">
                        <h2>
                            Website Creation
                        </h2>
                        <p>
                            Created Websites for Businesses
                        </p>
                        <ul className="project-tags">
                            <li>HTML</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>React</li>
                        </ul>
                        
                    </div>
                    </Link>
                </div>
                
                
            </div>
            
            </div>
        </div>
    )
}