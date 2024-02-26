import React from "react";
import ProjectInfobox from "../components/projectinfobox";


export default function Kickochet() {

    let data = {
        header: (<p>Kick-ochet</p>),
        subheader: (<p>A Browser Shooter Game</p>),
        links: [{
            id: 1,
            link: "https://frostiae.itch.io/kickochet", 
            text: "Kickochet"
        }
    ],
        text: (<p>
            Kickochet is a shooter browser game made in Unity. The project was created by a team of two programmers, myself and a friend.
            We developed the game during a 48-hour game jam with the theme of reversed roles.

            <br/><br/>

            The game draws inspiration from a character in an anime called JoJo's Bizarre Adventure, who has the ability to control fired bullets from his gun. 
            In Kickochet, players use this concept to control their own bullets and defeat their opponent in a wild west shoot-off.

            <br/><br/>

            During the development process, I focused on creating core mechanics such as bullet controls, obstacle systems, level design, and more. 
            I also created some assets, like the cactus, using Blender. For most other assets, we utilized a Unity asset store pack to save time.

            <br/><br/>

            Below is a live demo where you can test and play our game! Make sure to enable hardware acceleration for a smooth gaming experience. 
            Additionally, if you'd like to check out the itch.io page, you can find the link at the top of this page.
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
          text: "Teamwork"
      },
      {
          id: 4,
          text: "Blender"
      },
      {
          id: 5,
          text: "Live Demo"
      }
  ],                         
        buttons: [

        ],demo: <iframe frameborder="0" src="https://itch.io/embed-upload/8277511?color=ffda8b" className="kickochet-demo" allowfullscreen="" width="960" height="560"><a href="https://frostiae.itch.io/kickochet">Play Kickochet on itch.io</a></iframe>,
        headerimages: [{
            id: 1,
            src: "kickochet.png",
            alt: "kickochet"
          }
        ],
        bodyimages: [
        {
            id: 1,
            src: "kickochet3.gif",
            alt: "kickochetgif"
        },
        {
            id: 2,
            src: "kickochet1.png",
            alt: "kickochet1"
        },
        {
            id: 3,
            src: "kickochet2.png",
            alt: "cactus"
        }],
        websiteimages: []
    }

    return (
        <ProjectInfobox data = {data}/>
        
    );
}