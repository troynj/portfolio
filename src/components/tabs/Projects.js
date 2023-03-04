import React from 'react';

export default function Projects() {
  
  var myProjects = [
    {
      title: "Shadowlands",
      repo: "https://github.com/troynj/shadowlands",
      deploy: "https://powerful-oasis-50333.herokuapp.com/",
      image: "/assets/images/shadowlands.png",
      desc: "This is a game where you can create an accout, create new players, and battle your way through the shadowlands, where you and your monster will struggle to survive, but become stronger each victory.",
    },
    {
      title: "GitYourGameOn",
      repo: "https://github.com/troynj/GitYourGameOn",
      deploy: "https://bradcoleman60.github.io/GitYourGameOn/",
      image: "/assets/images/gitYourGameOn.gif",
      desc: "All the NBA data you need, from player stats to game times plus easy access to purchase tickets. Whats more - save your favorite players and view them all in one place",
    },
    {
      title: "passwordGenerator",
      repo: "https://github.com/troynj/passwordGenerator",
      deploy: "https://troynj.github.io/passwordGenerator/",
      image: "/assets/images/passwordGenerator.png",
      desc: "Recieve a randomized password after selecting parameters for your desired password!",
    },
    {
      title: "dailyPlanner",
      repo: "https://github.com/troynj/dailyPlanner",
      deploy: "https://troynj.github.io/dailyPlanner/",
      image: "/assets/images/dailyPlanner.png",
      desc: "You can create, view, and edit appointments for each hour of the work day. Your appointments will persist even after you reload the page!",
    },
    {
      title: "QuizGame",
      repo: "https://github.com/troynj/QuizGame",
      deploy: "https://troynj.github.io/QuizGame/",
      image: "/assets/images/quizGame.gif",
      desc: "Test your knowledge of everything code related with this code quiz game! view your scores and compete with your local friends!",
    },
    {
      title: "weatherForecast",
      repo: "https://github.com/troynj/weatherForecast",
      deploy: "https://troynj.github.io/weatherForecast/",
      image: "/assets/images/weatherForecast.png",
      desc: "Search a city - This website makes api calls to get the weather forecast for the current day and the future 5 days, plus the background image is updated with your searched city!",
    },
    {
      title: "wordGuesser",
      repo: "https://github.com/troynj/wordGuess",
      deploy: "https://troynj.github.io/wordGuess/",
      image: "/assets/images/wordGuesser.png",
      desc: "Guess the word before the time runs out!",
    }
  ];

  return myProjects.map((el, i) => (
    <article key={i}>
      <div style={{ backgroundImage: `url(${el.image})` }}>
        <p className="desc">{el.desc}</p>
        <a className="deploy" href={el.deploy} target="_blank">View Live Site</a>
        <a className="repo" href={el.repo} target="_blank">View Repository</a>
      </div>
      <h3>{el.title}</h3>
    </article>
  ));
  
  
}
