import React from 'react';

export default function Projects(prop) {

  return (
    <article >
      <img className="view"src={prop.src}/>
        <p className="desc">{prop.desc}</p>
        <a className="deploy" href={prop.deploy} target="_blank">View Live Site</a>
        <a className="repo" href={prop.repo} target="_blank">View Repository</a>
      <h3>{prop.title}</h3>
    </article>
  )
  
}
