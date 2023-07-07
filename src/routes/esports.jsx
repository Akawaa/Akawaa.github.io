import React from "react";
import ProjectInfobox from "../components/projectinfobox";


export default function Esports() {

    let data = {
        header: (<p>Professional Esports Player</p>),
        subheader: (<p>Professional Esports player for XL2 Academy and HU Storm</p>),
        links: [{
            id: 1,
            link: "https://liquipedia.net/overwatch/Akawa", 
            text: "My Esports Portfolio"
        }
    ],
        text: (
            <p> In the early years of high school, I discovered my passion for Overwatch, a highly competitive online game. As I honed my skills, I quickly climbed 
        the ranks, catching the attention of several teams. During my senior year, 
        I had the opportunity to join <a href = "https://liquipedia.net/overwatch/XL2_Academy" target = "_blank" className="paragraph-link"> XL2 Academy</a>, 
        a prestigious esports team that only 
        selects a few highly qualified players in all of North America.

        <br/><br/>

        After high school, I set my sights on collegiate esports and was fortunate to secure a full-ride scholarship
        at <a href = "https://liquipedia.net/overwatch/Harrisburg_University" target = "_blank" className="paragraph-link">Harrisburg University</a>. Alongside my studies 
        in Computer Science, a field I chose out of my love for programming and interest in math, I proudly represented the university as a member of their esports 
        team. 

        <br/><br/>

        Having recently graduated, I am excited to embark on my new career in Computer Science. I am eager to apply the knowledge and skills I've acquired 
        throughout my journey in competitive gaming and academia to make meaningful contributions in this field.
            </p>
        ),
        tags: [{
          id: 1,
          text: "Communication"
      },
      {
          id: 2,
          text: "Leadership"
      },
      {
          id: 3,
          text: "Teamwork"
      },
      {
          id: 4,
          text: "High Stress Environment"
      },
      {
          id: 5,
          text: "2020 National Collegiate Champion"
      }
  ],                         
        buttons: [

        ],
        headerimages: [{
            id: 1,
            src: "xl2.png",
            alt: "xl2"
          },
          {
            id: 2,
            src: "hustorm.png",
            alt: "hustorm"
          }

        ],
        bodyimages: [{
            id: 1,
            src: "akawapose.jpg",
            alt: "akawapose"
        },
        {
            id: 2,
            src: "ring1.jpg",
            alt: "esportsring1"
        },
        {
            id: 3,
            src: "ring2.jpg",
            alt: "esportsring2"
        }],
        websiteimages: []
    }

    return (
        <ProjectInfobox data = {data}/>
        
    );
}