import React from "react";
import ProjectInfobox from "../components/projectinfobox";


export default function Softwaredev() {

    let data = {
        header: "Coding Rat",
        subheader: "Game Creation with Unity",
        links: [{
            id: 1,
            link: "Final_Report_Project_1.pdf", 
            text: "Serious Games Report"
        },
        {
            id: 2,
            link: "project2_final.pdf",
            text: "Game Creation Report"
        }
    ], 
        text: (<p>
            I've had a long-standing desire to pursue game development due to my passion for video games. 
            In the middle of my degree, I embarked on my game development journey, where I learned Unity and 
            extensively researched serious games—a genre of video games designed to educate users on various topics.

            <br/><br/>

            In one of my classes, I conducted in-depth research on serious games, which culminated in a 
            20-page <a href = "Final_Report_Project_1.pdf" target = "_blank" className="paragraph-link">report</a>. 
            For my own serious game project, I decided to create a game aimed at teaching programming fundamentals to kids. 
            I've diligently documented my progress in another <a href = "project2_final.pdf" target = "_blank" className="paragraph-link">report</a>, 
            and I hope to present a complete demo soon.

            <br/><br/>

            Creating this game has been a tremendous learning experience for me, and it fuels my excitement to continue 
            working on it until I have a finished product. Additionally, I've been teaching myself Blender to eventually have the ability to create my own models once my skills are proficient enough.
        </p>
        ),
        tags: [{
            id: 1,
            text: "Unity"
        },
        {
            id: 2,
            text: "C#"
        },
        {
            id: 3,
            text: "Blender"
        },
        {
            id: 4,
            text: "Serious Game"
        },
        {
            id: 5,
            text: "Full Research Report"
        }
    ],
        buttons: [

        ],
        headerimages: [
            {
                id: 1,
                src: "codingrat.png",
                alt: "codingrat"
            }
        ],
        bodyimages: [{
            id: 1,
            src: "coding_rat1.png",
            alt: "coding_rat_pic1"
        },
        {
            id: 2,
            src: "coding_rat2.png",
            alt: "coding_rat_pic2"
        },
        {
            id: 3,
            src: "coding_rat3.jpg",
            alt: "coding_rat_pic3"
        }],
        websiteimages: []
    }

    return (
        <ProjectInfobox data = {data}/>
        
    );
}