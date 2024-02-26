import React from "react";
import ProjectInfobox from "../components/projectinfobox";


export default function Websites() {

    let data = {
        header: "Website Creation",
        subheader: "Created Websites for Businesses",
        links: [{
            id: 1,
            link: "https://www.literacywellness.com/", 
            text: "Literacy Wellness"
        },
        {
            id: 2,
            link: "https://teekaygeospatial.com/", 
            text: "Teekay Geospatial"
        },
        
        

        
    ],
        text: (<p>Over the past few months, I've had a couple of opportunities to create websites for startup businesses. One is made for a friend and is called Wellness Literacy, while the other is for my father's business, Teekay Geospatial. Both projects were created using React. As I am constantly seeking more opportunities, I would be delighted to create a website for you. If you're interested, please send me an 
        <a href = "mailto:adriankawa054@gmail.com" target = "_blank" className="paragraph-link"> email</a>, and we can discuss the details. Additionally, I am currently working on creating a website for another startup business, and I will update this page once it's live. Here are a couple of screenshots of the websites.</p>),
        tags: [{
            id: 1,
            text: "HTML"
        },
        {
            id: 2,
            text: "JavaScript"
        },
        {
            id: 3,
            text: "CSS"
        },
        {
            id: 4,
            text: "React"
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
        },
        {
            id: 3,
            src: "geospatial.png",
            alt: "toms website"
        }],
        bodyimages: []
    }

    return (
        <ProjectInfobox data = {data}/>
        
    );
}