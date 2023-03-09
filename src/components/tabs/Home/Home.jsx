import React from 'react';
import "./home.css"
import portrait from "./portrait.png"

export default function Home() {
  return (
<section id="snapshot">
        <img id="portrait" src={portrait}/>
        <article>
          <h2>Troy Johnson</h2>
          <h3>Full Stack Web Developer</h3>
        </article>
      </section>
  );
}
