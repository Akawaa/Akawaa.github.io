import React from "react";
import ProjectInfobox from "../components/projectinfobox";


export default function Queenproblem() {

    let data = {
        header: "N Queen's Problem",
        subheader: "Visualize N Queen's Problem using Unity",
        links: [{
        }
    ],
        text: (<p>
            The N-Queens problem is a classic puzzle in the field of computer science and mathematics. 
            It involves placing N chess queens on an N x N chessboard in such a way that no two queens threaten each other. 
            In other words, no two queens should share the same row, column, or diagonal.

            <br/><br/>

            During my Artificial Intelligence course, we had to solve this problem in Python. I chose to solve it using a recursive backtracking approach. I ended up solving it correctly, and it served as a fun and complex puzzle that I enjoyed solving a lot. During the time I completed the problem, I was also learning Unity, so I had an urge to visualize the algorithm in Unity as well since
            I thought it would be a cool little project to help me learn Unity more. Here is the live demo of the N-Queens problem.
        </p>),
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
            text: "Backtracking"
        },
        {
            id: 4,
            text: "Algorithm"
        },
        {
            id: 5,
            text: "Live Demo"
        }
    ],
        buttons: [

        ],
        demo: <iframe frameborder="0" src="https://itch.io/embed/2151610" width="552" height="167"><a href="https://akawaa.itch.io/n-queens-problem">N Queens Problem by Akawaa</a></iframe>,
        headerimages: [{
            id: 1,
            src: "queen.png",
            alt: "queen"
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