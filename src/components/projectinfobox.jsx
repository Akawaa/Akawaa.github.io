import React from "react";
import { Link } from "react-router-dom";

export default function ProjectInfobox(props) {
    const buttons = props.data.buttons.map((button) =>
      <li key={button.text}>
        <button>{button.text}</button>
      </li>
    );

    const headerimages = props.data.headerimages.map((image) =>
        <img key = {image.id} className="project-image" src= {image.src} alt={image.alt}></img>

    );

    const bodyimages = props.data.bodyimages.map((image) =>
        <img key={image.id} className="body-project-image" src= {image.src} alt={image.alt}></img>
    );

    const websiteimages = props.data.websiteimages.map((image) =>
        <img key={image.id} className="website-project-image" src= {image.src} alt={image.alt}></img>
    );

    const tags = props.data.tags.map((tag) =>
      <li key={tag.id}>
        <p>{tag.text}</p>
      </li>
    );

    const links = props.data.links.map((link) =>
        <a key={link.id} href = {link.link}  target = "_blank" className="contact-link"> {link.text}</a>
    );

    return (
        <div className="projectinfobox">
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

            <div className="project-header">
                <div className="project-title">
                {props.data.header != undefined &&
                <h2>{props.data.header}</h2>
                }
                </div>
                
                <div className="project-subheader">
                {props.data.subheader != undefined &&
                <h4>{props.data.subheader}</h4>
                }
                </div>
                

                <div className = "tags">
                {props.data.tags != undefined &&
                tags
                }
                </div>


                <div className="project-header-images">
                {props.data.headerimages != undefined &&
                headerimages
                }
                </div>

                <div className="link">
                  {props.data.links != undefined &&
                  links
                  }
                </div>

            </div>
            <div className ="project-description">

                <div className="projectbox-info">
                {props.data.text != undefined && props.data.text 
                }
                </div>

                <div className="project-video">
                {props.data.video != undefined && <video src= {props.data.video} className="project-video-snake" controls >Your browser does not support the video tag.</video>
                }
                </div>

                <div className="project-demo">
                {props.data.demo != undefined && props.data.demo
                }
                </div>
                
                
                <div className="project-info-images">
                {props.data.bodyimages != undefined &&
                bodyimages
                }
                </div>

                <div className="project-website-images">
                {props.data.websiteimages != undefined &&
                websiteimages
                }
                </div>
                
            </div>
        </div>
    );
}