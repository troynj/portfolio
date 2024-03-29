import React, { useState }from "react";
import "./projects.css";
import Project from "./Project.jsx"
import shadowlands from "./images/shadowlands.png"
import gitYourGameOn from "./images/gitYourGameOn.gif"
import passwordGenerator from "./images/passwordGenerator.png"
import dailyPlanner from "./images/dailyPlanner.png"
import quizGame from "./images/quizGame.gif"
import weatherForecast from "./images/weatherForecast.png"
import wordGuesser from "./images/wordGuesser.png"
import newBeeFinancial from "./images/newBeeDeploy.gif"

export default function Projects() {
  var myProjects = [
    {
      title: "NewBee Financial",
      repo: "https://github.com/troynj/NewBee-Financial",
      deploy: "https://fierce-plains-86350.herokuapp.com/",
      image: {
        src: newBeeFinancial,
        alt: "screen shot of my finance app",
      },
      desc: "NewBee Financial is an application that educates the beginner investor in understanding key financial metrics of major public companies in the United States.",
    },
    {
      title: "Shadowlands",
      repo: "https://github.com/troynj/shadowlands",
      deploy: "https://powerful-oasis-50333.herokuapp.com/",
      image: {
        src: shadowlands,
        alt: "screen shot of my turn-based monster fighter game",
      },
      desc: "This is a game where you can create an accout, create new players, and battle your way through the shadowlands, where you and your monster will struggle to survive, but become stronger each victory.",
    },
    {
      title: "GitYourGameOn",
      repo: "https://github.com/troynj/GitYourGameOn",
      deploy: "https://bradcoleman60.github.io/GitYourGameOn/",
      image: {
        src: gitYourGameOn,
        alt: "screen shot of my Event finder application",
      },
      desc: "All the NBA data you need, from player stats to game times plus easy access to purchase tickets. Whats more - save your favorite players and view them all in one place",
    },
    {
      title: "passwordGenerator",
      repo: "https://github.com/troynj/passwordGenerator",
      deploy: "https://troynj.github.io/passwordGenerator/",
      image: {
        src: passwordGenerator,
        alt: "screen shot of my password generator app",
      },
      desc: "Recieve a randomized password after selecting parameters for your desired password!",
    },
    {
      title: "dailyPlanner",
      repo: "https://github.com/troynj/dailyPlanner",
      deploy: "https://troynj.github.io/dailyPlanner/",
      image: {
        src: dailyPlanner,
        alt: "screen shot of my daily planner app",
      },
      desc: "You can create, view, and edit appointments for each hour of the work day. Your appointments will persist even after you reload the page!",
    },
    {
      title: "QuizGame",
      repo: "https://github.com/troynj/QuizGame",
      deploy: "https://troynj.github.io/QuizGame/",
      image: {
        src: quizGame,
        alt: "screen shot of my quiz game",
      },
      desc: "Test your knowledge of everything code related with this code quiz game! view your scores and compete with your local friends!",
    },
    {
      title: "weatherForecast",
      repo: "https://github.com/troynj/weatherForecast",
      deploy: "https://troynj.github.io/weatherForecast/",
      image: {
        src: weatherForecast,
        alt: "screen shot of my weather app",
      },
      desc: "Search a city - This website makes api calls to get the weather forecast for the current day and the future 5 days, plus the background image is updated with your searched city!",
    },
    {
      title: "wordGuesser",
      repo: "https://github.com/troynj/wordGuess",
      deploy: "https://troynj.github.io/wordGuess/",
      image: {
        src: wordGuesser,
        alt: "screen shot of my word guesser game",
      },
      desc: "Guess the word before the time runs out!",
    },
  ];

  const [project, setProject ] = useState(<Project title={myProjects[0].title}
    repo={myProjects[0].repo}
    deploy={myProjects[0].deploy}
    src={myProjects[0].image.src}
    alt={myProjects[0].image.alt}
    desc={myProjects[0].desc}/>)
  return (<>
    <section className="projects">
      {myProjects.map((el, i) => (
        <img 
        key={i} 
        src={el.image.src} 
        alt={el.image.alt}
               onMouseEnter={() => {setProject(<Project title={el.title}
                repo={el.repo}
                deploy={el.deploy}
                src={el.image.src}
                alt={el.image.alt}
                desc={el.desc}/>)}}
        />
      ))}
    </section>
      <section>
      <div className="project-details">{project}</div>
    </section>
    </>
  );
}
