import React from "react";
import ProjectInfobox from "../components/projectinfobox";


export default function SnakeAI() {

    let data = {
        header: "Snake AI",
        subheader: "Snake AI using Reinforcement Learning",
        links: [{
            id: 1,
            link: "Creating_a_Snake_AI.pdf",
            text: "Snake AI and Reinforcement Learning Report"
        }
    ],
        text: (<p>
        Coming into my Artificial Intelligence course, I knew I wanted to create a video game AI. I thought integrating my love for games with AI would 
        create an extremely fun experience to document and learn from.

        <br/><br/>

        For our final project, we had the freedom to choose any AI-related topic, and since I wanted to create a game AI, I opted for a simple game like Snake. 
        This choice would make it easier for me to learn machine learning concepts. During my research, I realized that taking a reinforcement learning approach
        using deep Q-learning would be ideal given my level of experience.

        <br/><br/>

        I created a comprehensive <a href = "Creating_a_Snake_AI.pdf" target = "_blank" className="paragraph-link">report</a> that delved into deep Q-learning, 
        reinforcement learning, and provided code breakdowns. I received a grade of 100% 
        for both my report and the final code implementation. Here is a video showcasing the AI in action, It starts off fairly slow however later on in the video
        it can get scores far into the double digits.
        </p>),
        tags: [{
            id: 1,
            text: "Python"
        },
        {
            id: 2,
            text: "PyTorch"
        },
        {
            id: 3,
            text: "Reinforcement Learning"
        },
        {
            id: 4,
            text: "Machine Learning"
        },
        {
            id: 5,
            text: "Video Display"
        },
        {
            id: 6,
            text: "Full Research Report"
        }
    ],
        buttons: [

        ],
        headerimages: [{
            id: 1,
            src: "snake.png",
            alt: "snake"
        }],
        video: "snakeai.mp4",
        bodyimages: [],
        websiteimages: []
    }

    return (
        <ProjectInfobox data = {data}/>
        
    );
}