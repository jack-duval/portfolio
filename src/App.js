import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <section className="header">
        <h1>
          Jack Duval
        </h1>
        <h2>
          Software Engineer - Musician - Product Dev
        </h2>
      </header>

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

      <section className="experience-body">
        <h3>
          Experience:
        </h3>
          <ul>

            <li>
              <h4>Edmit:</h4>
              <p>
                Chief of Staff
              </p>
              <p>(August 2019 - Present)</p>
              <p>
                Duties:
                <p className="list-indent">
                  Duties here
                </p>
              </p>
              <p>
                Responsibilities:
                <p className="list-indent">
                  Responsibilities here
                </p>
              </p>
            </li>

            <li>
              <h4>Edmit:</h4>
              <p>
                Software Engineering Intern
              </p>
              <p>(May 2019 - August 2019)</p>
              <p>
                Duties:
                <p className="list-indent">
                  Duties here
                </p>
              </p>
              <p>
                Responsibilities:
                <p className="list-indent">
                  Responsibilities here
                </p>
              </p>
            </li>

            <li>
              <h4>Apple:</h4>
              <p>
                Specialist
              </p>
              <p>(February 2020 - Present)</p>
              <p>
                Duties:
                <p className="list-indent">
                  Duties here
                </p>
              </p>
              <p>
                Responsibilities:
                <p className="list-indent">
                  Responsibilities here
                </p>
              </p>
            </li>

            <li>
              <h4>Dynamo Fencing Center:</h4>
              <p>
                Assistant Coach
              </p>
              <p>(August 2018 - Present)</p>
              <p>
                Duties:
                <p className="list-indent">
                  Duties here
                </p>
              </p>
              <p>
                Responsibilities:
                <p className="list-indent">
                  Responsibilities here
                </p>
              </p>
            </li>

            <li>
              <h4>Northeastern University:</h4>
              <p>
                Student Affairs Technology Specialist
              </p>
              <p>(August 2018 - May 2019)</p>
              <p>
                Duties:
                <p className="list-indent">
                  Duties here
                </p>
              </p>
              <p>
                Responsibilities:
                <p className="list-indent">
                  Responsibilities here
                </p>
              </p>
            </li>

          </ul>
      </section>

      <section className="projects-body">

        <h3>
          Projects
        </h3>

      </section>
    </div>
  );
}

export default App;
