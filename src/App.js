import React from 'react';
import './App.css';
import ExperienceList from './experience-list'


function App() {
  // Added comment to test pushing from vscode
  return (
    <div>
      <section className="header">
        <h1>
          Jack Duval
        </h1>
        <h2>
          Software Engineer - Musician - Product Dev
        </h2>
      </section>

      <section className="about-body">
        <h3>
          About Me:
        </h3>
        <p>
          I'm 20 years old andfrom a small town outside of Boston, MA. I'm currently a rising 3rd year 
          at Northeastern University, pursuing a Bachelor's of Science in Computer Engineering. In my free time,
          I enjoy making music, practicing algo on Leetcode, and reading books.

        </p>
        <p>
          With passions in technology and in more creative fields, 
          I bring a dynamic perspective to teams. While I'm studying Computer Engineering 
          in school, I enjoy taking on challenging projects otuside of class. To see some 
          samples, check out the "Projects" section below.
        </p>
      </section>

      <div>
        <ExperienceList className="experience-layout" />
      </div>

      <section className="projects-body">

        <h3>
          Projects
        </h3>

      </section>
    </div>
  );
}

export default App;
