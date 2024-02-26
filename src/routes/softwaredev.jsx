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
        <p>Through the summer of 2023, I worked as a software developer intern at Harrisburg University. This internship commenced in early May and concluded at the end of August. During the internship, I worked hard to create clean and deliverable code, and I worked in an agile scrum environment where we held meetings every week. I faced and solved challenging and exciting coding problems to accomplish my tasks every week. Below is an image of how the software looked after my internship was over. The 'output' button generates a CSV file of all the measurements in nanometers. I enjoyed this experience very much and believe it would greatly help me in my future field.</p>
        ),
        tags: [{
            id: 1,
            text: "Python"
        },
        {
            id: 2,
            text: "Software Development"
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
            src: "bacsoftware.png",
            alt: "bacteriasoftware"
        }],
        websiteimages: []
    }

    return (
        <ProjectInfobox data = {data}/>
        
    );
}