import React from "react";
import ProjectInfobox from "../components/projectinfobox";


export default function Websites() {

    let data = {
        header: "Website Creation",
        subheader: "Created Website for Friends Business",
        links: [{
        }
    ],
        text: (<p>Recently, I had the enjoyable task of creating a website for a friend's business. During this project, 
            I acquired essential frontend skills in React to assist in developing the website. As I am constantly seeking more opportunities, 
            I would be delighted to create a website for you. If you're interested, please send me 
            an <a href = "mailto:adriankawa054@gmail.com" target = "_blank" className="paragraph-link">email</a>, and we can discuss the details 
            and payment terms. 
            Although the website I created for my friend is not currently live, 
            I will update this page once it goes live to showcase it. Here are a couple of screenshots of the website.</p>),
        tags: [{
            id: 1,
            text: "Python"
        },
        {
            id: 2,
            text: "Current Position"
        }
    ],
        buttons: [

        ],
        headerimages: [{
            id: 1,
            src: "website.png",
            alt: "website"
        }],
        
        websiteimages: [{
            id: 1,
            src: "website1.png",
            alt: "website1"
        },
        {
            id: 2,
            src: "website2.png",
            alt: "website2"
        }],
        bodyimages: []
    }

    return (
        <ProjectInfobox data = {data}/>
        
    );
}