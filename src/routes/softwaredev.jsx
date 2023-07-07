import React from "react";
import ProjectInfobox from "../components/projectinfobox";


export default function Softwaredev() {

    let data = {
        header: "Software Developer Intern",
        subheader: "Software Developer Intern at Harrisburg University",
        links: [{
        }
    ],
        text: (
        <p>I am currently serving as a software development intern at Harrisburg University. This internship commenced in early May and is scheduled to 
            conclude at the end of August. As part of my role, I collaborate with a teammate to develop software that automates the measurement of bacteria cells. 
            This website serves as a platform to showcase my work and experiences during this internship.</p>
        ),
        tags: [{
            id: 1,
            text: "Python"
        },
        {
            id: 2,
            text: "Current Position"
        },
    ],

        buttons: [

        ],
        headerimages: [{
            id: 1,
            src: "hu.png",
            alt: "hu"
        }],
        bodyimages: [{
            id: 1,
            src: "",
            alt: ""
        }],
        websiteimages: []
    }

    return (
        <ProjectInfobox data = {data}/>
        
    );
}